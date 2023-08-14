/*
  Warnings:

  - Changed the type of `destination` on the `Trip` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "destination",
ADD COLUMN     "destination" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Destination";
