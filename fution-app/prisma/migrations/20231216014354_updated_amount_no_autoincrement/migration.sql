-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "updatedAmount" SET DEFAULT 1,
ALTER COLUMN "updatedAmount" DROP DEFAULT;
DROP SEQUENCE "Record_updatedAmount_seq";
