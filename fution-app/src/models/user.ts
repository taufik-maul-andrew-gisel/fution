import prisma from "../../prisma/config";

export default class User {
  static async get() {
    return await prisma.user.findMany();
  }

  static async GetUserByUsername(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  }

  static async GetUserWithoutPassword(username: string) {
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
}
