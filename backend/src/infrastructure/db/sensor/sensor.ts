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
      include: {
        SensorType: true,
        room: true
      },
      where: {
        id: id,
      },
    });
  };

  const findByProperty = async (params: any) => {
    return await prisma.sensor.findMany({
      include: {
        SensorType: true,
        room: true
      },
      where: params,
    });
  };

  const update = async (id: number, data: any) => {
    return await prisma.sensor.update({
      where: {
        id: id
      },
      data: data,
    })
  }

  const deleteSensor = async (id: number) => {
    return await prisma.sensor.delete({
      where: {
        id: id,
      },
    })
  }

  const findAllById = async (id: number) => {
    return await prisma.sensor.findMany({
      include: {
        SensorType: true,
        room: true
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
        room: true
      },
    });
  };

  const checkRoom = async (id: number) => {
    return await prisma.room.findMany({
      where: {
        id: id,
      }
    });
  }
  const checkSensorType = async (id: number) => {
    return await prisma.sensorType.findFirst({
      where: {
        id: id
      }
    })
  }

  return {
    add,
    findAllById,
    findById,
    findByProperty,
    update,
    findAll,
    deleteSensor,
    checkRoom,
    checkSensorType,
  };
}
