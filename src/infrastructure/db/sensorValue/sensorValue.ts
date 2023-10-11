import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export default function sensorValueRepository() {
    const add = async (sensorValueEntity: any) => {
        return await prisma.sensorValue.create({
            data: sensorValueEntity,
        });
    };

    const findById = async (id: number) => {
        return await prisma.sensorValue.findFirst({
            where: {
                id: id,
            },
        });
    };

    const findByProperty = async (params: any) => {
        return await prisma.sensorValue.findMany({
            where: params,
        });
    };

    const findLastById = async (id: number) => {
        return await prisma.sensorValue.findMany({
            take: 1,
            where: {
                id: id,
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
    };

    const findAll = async () => {
        return await prisma.sensorValue.findMany({});
    };

    return {
        add,
        findAll,
        findById,
        findLastById,
        findByProperty,
    };
}
