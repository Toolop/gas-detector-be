-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "idRoom" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("idRoom")
);

-- CreateTable
CREATE TABLE "Battery" (
    "id_battery" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Battery_pkey" PRIMARY KEY ("id_battery")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id_sensor" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "calibration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id_sensor")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id_condition" SERIAL NOT NULL,
    "set_point" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "id_sensor" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id_condition")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Room_idRoom_key" ON "Room"("idRoom");

-- CreateIndex
CREATE UNIQUE INDEX "Battery_id_battery_key" ON "Battery"("id_battery");

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_id_sensor_key" ON "Sensor"("id_sensor");
