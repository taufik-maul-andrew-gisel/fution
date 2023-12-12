-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('BUSINESS', 'LENDER');

-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('PENDING', 'REJECTED', 'DEBT', 'OVERDUE', 'PAID');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "monthlyRevenue" DECIMAL(65,30) NOT NULL,
    "creditScore" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "credential" INTEGER NOT NULL DEFAULT 100,
    "tagline" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lender" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "budget" DECIMAL(65,30) NOT NULL,
    "expectedInterest" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Lender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(65,30) NOT NULL,
    "status" "LoanStatus" NOT NULL,
    "due" TIMESTAMP(3) NOT NULL,
    "loaneeId" TEXT NOT NULL,
    "loanerId" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Business_userId_key" ON "Business"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Lender_userId_key" ON "Lender"("userId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lender" ADD CONSTRAINT "Lender_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_loaneeId_fkey" FOREIGN KEY ("loaneeId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_loanerId_fkey" FOREIGN KEY ("loanerId") REFERENCES "Lender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
