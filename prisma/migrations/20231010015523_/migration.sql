/*
  Warnings:

  - Added the required column `roomId` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "roomId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
