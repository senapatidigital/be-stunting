/*
  Warnings:

  - You are about to drop the column `heigt` on the `VariableFuzzy` table. All the data in the column will be lost.
  - Added the required column `height` to the `VariableFuzzy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VariableFuzzy" DROP COLUMN "heigt",
ADD COLUMN     "height" "HeightResult" NOT NULL;
