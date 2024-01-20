/*
  Warnings:

  - You are about to drop the column `Department` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `Position` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `department` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "Department",
DROP COLUMN "Position",
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL;
