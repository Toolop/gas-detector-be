import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export default function userRepository() {
  const add = async (userEntity: any) => {
    return await prisma.user.create({
      data: userEntity,
    });
  };

  const findById = async (id: number) => {
    return await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  };

  const findByProperty = async (params: any) => {
    return await prisma.user.findMany({
      where: params,
    });
  };

  const findAll = async () => {
    return await prisma.user.findMany({});
  };

  const updateUser = async (id: number, data: any) => {
    return await prisma.user.update({
      where: {
        id: id
      },
      data: data,
    })
  }

  return {
    add,
    findAll,
    findById,
    updateUser,
    findByProperty,
  };
}
