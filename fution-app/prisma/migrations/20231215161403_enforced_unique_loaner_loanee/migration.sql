/*
  Warnings:

  - A unique constraint covering the columns `[loaneeId,loanerId]` on the table `Record` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Record_loaneeId_loanerId_key" ON "Record"("loaneeId", "loanerId");
