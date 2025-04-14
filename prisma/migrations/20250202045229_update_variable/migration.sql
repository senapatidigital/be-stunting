-- CreateEnum
CREATE TYPE "Age" AS ENUM ('MUDA', 'TUA');

-- CreateEnum
CREATE TYPE "Result" AS ENUM ('KURANG', 'NORMAL');

-- CreateEnum
CREATE TYPE "HeightResult" AS ENUM ('NORMAL', 'PENDEK');

-- CreateTable
CREATE TABLE "VariableFuzzy" (
    "id" TEXT NOT NULL,
    "age" "Age" NOT NULL,
    "weight" "Result" NOT NULL,
    "heigt" "HeightResult" NOT NULL,
    "zsBBU" "Result" NOT NULL,
    "zsTBU" "Result" NOT NULL,
    "output" "OutputType" NOT NULL,

    CONSTRAINT "VariableFuzzy_pkey" PRIMARY KEY ("id")
);
