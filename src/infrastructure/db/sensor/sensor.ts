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

  const update = async (id: number, name: string) => {
    return await prisma.sensor.update({
      where: {
        id: id
      },
      data: {
        name: name
      }
    })
  }

  const deleteSensor = async (id: number) => {
    return await prisma.user.delete({
      where: {
        id: id,
      },
    })
  }



  const findAllById = async (id: number) => {
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
