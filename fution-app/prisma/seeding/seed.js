const { PrismaClient } = require("@prisma/client");
const users = require("../../../data/users.json");
const businesses = require("../../../data/businesses.json");
const lenders = require("../../../data/lenders.json");
const records = require("../../../data/records.json");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function load() {
    try {
        await prisma.record.deleteMany();
        console.log("deleted records");

        await prisma.lender.deleteMany();
        console.log("deleted lender");

        await prisma.business.deleteMany();
        console.log("deleted business");

        await prisma.user.deleteMany();
        console.log("deleted user");

        const usersHashed = users.map((user) => {
            user.password = bcrypt.hashSync(user.password);
            return user;
        });
        await prisma.user.createMany({ data: usersHashed });
        console.log("seeded user");

        await prisma.business.createMany({ data: businesses });
        console.log("seeded business");

        await prisma.lender.createMany({ data: lenders });
        console.log("seeded lender");

        const recordsWIthISODates = records.map((record) => {
            record.createdAt = new Date(record.createdAt);
            record.due = new Date(record.due);
            return record;
        });
        await prisma.record.createMany({ data: recordsWIthISODates });
        console.log("seeded records");
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

load();
