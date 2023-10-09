import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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

  console.log({ createType });
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
