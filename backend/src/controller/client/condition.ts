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

    let message = await prisma.condition.findMany({});

    client.publish(topic, JSON.stringify(message), { qos: 0, retain: false });
  } catch (err) {
    console.log(err);
  }
};

export default publishCondtion;
