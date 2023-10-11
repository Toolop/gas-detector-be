/*
  Warnings:

  - You are about to drop the `_RoomToSensor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roomId` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RoomToSensor" DROP CONSTRAINT "_RoomToSensor_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToSensor" DROP CONSTRAINT "_RoomToSensor_B_fkey";

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "roomId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_RoomToSensor";

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
