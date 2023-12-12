import { hashText } from "@/utils/bcryptjs";
import prisma from "../../prisma/config";
import { UserRole } from "@prisma/client";

export default class User {
  static async get() {
    return await prisma.user.findMany();
  }

  static async getById(id: string) {
    return await prisma.user.findFirst({ where: { id } });
  }

  static async getByUsername(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  }

  static async getByUsernameWithoutPassword(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        role: true,
      },
    });
    return user;
  }

  static async createUser(userInputSchema: {
    username: string;
    password: string;
    role: UserRole;
  }) {
    const hashedPassword = hashText(userInputSchema.password);
    const userWithHashedPassword = {
      username: userInputSchema.username,
      password: hashedPassword,
      role: userInputSchema.role,
    };
    const user = await prisma.user.create({
      data: {
        username: userWithHashedPassword.username,
        password: userWithHashedPassword.password,
        role: userWithHashedPassword.role,
      },
      select: {
        username: true,
        role: true,
      },
    });
    return user;
  }
}
