import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export default function conditionRepository() {
  const add = async (conditionEntity: any) => {
    return await prisma.condition.create({
      data: conditionEntity,
    });
  };

  const findById = async (id: number) => {
    return await prisma.condition.findFirst({
      where: {
        id: id,
      },
    });
  };

  const findByProperty = async (params: object) => {
    return await prisma.condition.findMany({
      where: params,
    });
  };

  const update = async (
    id: number,
    upperDanger: number,
    upperWarning: number,
    lowerDanger: number,
    lowerWarning: number
  ) => {
    return await prisma.condition.update({
      where: {
        sensorId: id,
      },
      data: {
        upperDanger: upperDanger,
        upperWarning: upperWarning,
        lowerDanger: lowerDanger,
        lowerWarning: lowerWarning,
      },
    });
  };

  const deleteCondition = async (id: number) => {
    return await prisma.condition.delete({
      where: {
        id: id,
      },
    });
  };

  const findAllById = async (id: number) => {
    return await prisma.condition.findMany({
      where: {
        sensorId: id,
      },
    });
  };

  const findAll = async () => {
    return await prisma.condition.findMany({});
  };

  const checkSensor = async (id: number) => {
    return await prisma.sensor.findMany({
      where: {
        id: id,
      },
    });
  };
  const findBySensorId = async (id: number) => {
    return await prisma.sensor.findFirst({
      include: {
        SensorType: true,
        room: true,
      },
      where: {
        id: id,
      },
    });
  };

  return {
    add,
    findAllById,
    findById,
    findByProperty,
    update,
    findAll,
    deleteCondition,
    checkSensor,
    findBySensorId,
  };
}
