/*
  Warnings:

  - You are about to drop the column `budget` on the `Lender` table. All the data in the column will be lost.
  - You are about to drop the column `expectedInterest` on the `Lender` table. All the data in the column will be lost.
  - Added the required column `maxBudget` to the `Lender` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxInterest` to the `Lender` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minBudget` to the `Lender` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minInterest` to the `Lender` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lender" DROP COLUMN "budget",
DROP COLUMN "expectedInterest",
ADD COLUMN     "maxBudget" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "maxInterest" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "minBudget" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "minInterest" DECIMAL(65,30) NOT NULL;
