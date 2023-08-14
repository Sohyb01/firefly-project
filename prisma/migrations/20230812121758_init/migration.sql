/*
  Warnings:

  - Added the required column `destination` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Destination" AS ENUM ('MOUNTAIN', 'LAKE', 'RIVER');

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "destination" "Destination" NOT NULL;
