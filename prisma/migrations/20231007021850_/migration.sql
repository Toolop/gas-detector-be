/*
  Warnings:

  - The primary key for the `Condition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_condition` on the `Condition` table. All the data in the column will be lost.
  - You are about to drop the column `id_sensor` on the `Condition` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idRoom` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `Sensor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_sensor` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the `Battery` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Condition` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Sensor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Condition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Condition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Room_idRoom_key";

-- DropIndex
DROP INDEX "Sensor_id_sensor_key";

-- AlterTable
ALTER TABLE "Condition" DROP CONSTRAINT "Condition_pkey",
DROP COLUMN "id_condition",
DROP COLUMN "id_sensor",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Condition_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "idRoom",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_pkey",
DROP COLUMN "id_sensor",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD COLUMN     "sensorTypeId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "calibration" DROP NOT NULL,
ADD CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Battery";

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesOnUser" (
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "RolesOnUser_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "RoomOnUser" (
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "RoomOnUser_pkey" PRIMARY KEY ("userId","roomId")
);

-- CreateTable
CREATE TABLE "SensorType" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SensorType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorValue" (
    "id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sensorId" INTEGER,

    CONSTRAINT "SensorValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SensorType_id_key" ON "SensorType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SensorValue_id_key" ON "SensorValue"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Condition_id_key" ON "Condition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_id_key" ON "Sensor"("id");

-- AddForeignKey
ALTER TABLE "RolesOnUser" ADD CONSTRAINT "RolesOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesOnUser" ADD CONSTRAINT "RolesOnUser_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomOnUser" ADD CONSTRAINT "RoomOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomOnUser" ADD CONSTRAINT "RoomOnUser_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_sensorTypeId_fkey" FOREIGN KEY ("sensorTypeId") REFERENCES "SensorType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorValue" ADD CONSTRAINT "SensorValue_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
