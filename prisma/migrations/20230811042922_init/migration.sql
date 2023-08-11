/*
  Warnings:

  - Added the required column `numberOfPeople` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "numberOfPeople" INTEGER NOT NULL;
