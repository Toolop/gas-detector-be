import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export default function roomRepository() {
  const add = async (roomEntity: any) => {
    return await prisma.room.create({
      data: roomEntity,
    });
  };

  const addRelation = async (roomId: number, userId: number) => {
    return await prisma.roomOnUser.create({
      data: {
        roomId: roomId,
        userId: userId,
      },
    });
  };

  const findById = async (id: number) => {
    return await prisma.room.findFirst({
      where: {
        id: id,
      },
    });
  };

  const findByProperty = async (params: any) => {
    return await prisma.room.findMany({
      include: {
        RoomOnUser: true,
      },
      where: params,
    });
  };

  const findAll = async () => {
    return await prisma.room.findMany({
      include: {
        RoomOnUser: true,
      },
    });
  };

  return {
    add,
    findAll,
    findById,
    findByProperty,
    addRelation,
  };
}
