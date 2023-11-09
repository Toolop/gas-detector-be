import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function main() {
  const createType = await prisma.sensorType.createMany({
    data: [
      {
        name: "environment",
      },
      {
        name: "battery",
      },
      {
        name: "gas",
      },
    ],
  });
  const hashedPassword = await bcrypt.hash("sucofindo", 10);
  const userInsert = await prisma.user.createMany({
    data: [
      {
        username: "sucofindo",
        email: "sucofindo@gmail.com",
        name: "sucofindo",
        password: hashedPassword,
      },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  const roomSensor = await prisma.room.createMany({
    data: [{ name: "room 1" }],
    skipDuplicates: true, // Skip 'Bobo'
  });
  const roomonuser = await prisma.roomOnUser.createMany({
    data: [{ roomId: 1, userId: 1 }],
    skipDuplicates: false, // Skip 'Bobo'
  });
  const sensorInsert = await prisma.sensor.createMany({
    data: [
      {
        name: "Temperature",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:35:48.854Z",
        updatedAt: "2023-10-16T22:35:48.854Z",
        sensorTypeId: 1,
      },
      {
        name: "Humidity",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:36:07.703Z",
        updatedAt: "2023-10-16T22:36:07.703Z",
        sensorTypeId: 1,
      },
      {
        name: "Battery",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:36:28.261Z",
        updatedAt: "2023-10-16T22:36:28.261Z",
        sensorTypeId: 2,
      },
      {
        name: "SO₂",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:37:02.938Z",
        updatedAt: "2023-10-16T22:37:02.938Z",
        sensorTypeId: 3,
      },
      {
        name: "CO",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:37:11.886Z",
        updatedAt: "2023-10-16T22:37:11.886Z",
        sensorTypeId: 3,
      },
      {
        name: "NO₂",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:37:21.305Z",
        updatedAt: "2023-10-16T22:37:21.305Z",
        sensorTypeId: 3,
      },
      {
        name: "NH₃",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:39:38.151Z",
        updatedAt: "2023-10-16T22:39:38.151Z",
        sensorTypeId: 3,
      },
      {
        name: "H₂S",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:42:33.282Z",
        updatedAt: "2023-10-16T22:42:33.282Z",
        sensorTypeId: 3,
      },
      {
        name: "dust",
        calibration: "x",
        roomId: 1,
        createdAt: "2023-10-16T22:42:40.983Z",
        updatedAt: "2023-10-16T22:42:40.983Z",
        sensorTypeId: 3,
      },
    ],
    skipDuplicates: false, // Skip 'Bobo'
  });

  const conditionInsert = await prisma.condition.createMany({
    data: [
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 25,
        createdAt: "2023-10-16T22:43:06.761Z",
        updatedAt: "2023-10-17T09:29:58.504Z",
        sensorId: 1,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:13.292Z",
        updatedAt: "2023-10-16T22:43:13.292Z",
        sensorId: 2,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:17.329Z",
        updatedAt: "2023-10-16T22:43:17.329Z",
        sensorId: 3,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:23.471Z",
        updatedAt: "2023-10-16T22:43:23.471Z",
        sensorId: 4,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:27.009Z",
        updatedAt: "2023-10-16T22:43:27.009Z",
        sensorId: 5,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:30.937Z",
        updatedAt: "2023-10-16T22:43:30.937Z",
        sensorId: 6,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:35.326Z",
        updatedAt: "2023-10-16T22:43:35.326Z",
        sensorId: 7,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:38.706Z",
        updatedAt: "2023-10-16T22:43:38.706Z",
        sensorId: 8,
      },
      {
        upperDanger: 50,
        upperWarning: 100,
        lowerDanger: 10,
        lowerWarning: 20,
        createdAt: "2023-10-16T22:43:42.208Z",
        updatedAt: "2023-10-16T22:43:42.208Z",
        sensorId: 9,
      },
    ],
    skipDuplicates: false, // Skip 'Bobo'
  });
  console.log({
    createType,
    userInsert,
    roomSensor,
    roomonuser,
    sensorInsert,
    conditionInsert,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
