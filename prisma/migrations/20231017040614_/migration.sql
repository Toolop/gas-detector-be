/*
  Warnings:

  - A unique constraint covering the columns `[sensorId]` on the table `Condition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Condition_sensorId_key" ON "Condition"("sensorId");
