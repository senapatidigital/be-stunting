/*
  Warnings:

  - Added the required column `zsBBuMax` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zsBBuMin` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zsTbuMax` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zsTbuMin` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FuzzyRule" ADD COLUMN     "zsBBuMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zsBBuMin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zsTbuMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zsTbuMin" DOUBLE PRECISION NOT NULL;
