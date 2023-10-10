import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export default function sensorRepository() {
  const add = async (sensorEntity: any) => {
    return await prisma.sensor.create({
      data: sensorEntity,
    });
  };

  const findById = async (id: number) => {
    return await prisma.sensor.findFirst({
      where: {
        id: id,
      },
    });
  };

  const findByProperty = async (params: any) => {
    return await prisma.sensor.findMany({
      include: {
        SensorType: true,
      },
      where: params,
    });
  };

  const findAllByIdRoom = async (id: number) => {
    return await prisma.sensor.findMany({
      include: {
        SensorType: true,
      },
      where: {
        roomId: id,
      },
    });
  };

  const findAll = async () => {
    return await prisma.sensor.findMany({
      include: {
        SensorType: true,
      },
    });
  };

  return {
    add,
    findAllByIdRoom,
    findById,
    findByProperty,
    findAll,
  };
}
