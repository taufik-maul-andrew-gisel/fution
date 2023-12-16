const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function down() {
    try {
        await prisma.record.deleteMany();
        console.log("deleted records");

        await prisma.lender.deleteMany();
        console.log("deleted lender");

        await prisma.business.deleteMany();
        console.log("deleted business");

        await prisma.user.deleteMany();
        console.log("deleted user");
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

down();
