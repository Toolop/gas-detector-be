const mqtt = require("mqtt");
const dotenv = require("dotenv");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

const publishCondtion = async () => {
  try {
    dotenv.config();

    const clientId = `${process.env.clientMqtt}${Math.random()
      .toString(16)
      .slice(3)}`;

    const client = await mqtt.connect(process.env.mqttUrl, {
      clientId,
      keepalive: 30,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      connectTimeout: 30 * 1000,
      rejectUnauthorized: false,
      reconnectPeriod: 1000,
      username: process.env.usernameMqtt,
      password: process.env.passwordMqtt,
    });

    const topic = process.env.topicCondition;

    let message = await prisma.condition.findMany({
      select: {
        id: true,
      },
    });
    for (let i = 0; i < message.length; i++) {
      const sendData = await prisma.condition.findMany({
        where: { sensorId: message[i].id },
        select: {
          sensorId: true,
          upperDanger: true,
          upperWarning: true,
          lowerDanger: true,
          lowerWarning: true,
        },
      });

      client.publish(
        `${topic}/${sendData[0].sensorId}`,
        JSON.stringify(sendData[0]),
        { qos: 2, retain: false },
        function (error: any) {
          if (error) {
            console.log(error);
          } else {
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export default publishCondtion;
