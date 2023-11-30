const mqtt = require("mqtt");
const dotenv = require("dotenv");
import { PrismaClient } from "@prisma/client";
import publishCondtion from "./condition";

const prisma = new PrismaClient({});

const firstOn = async () => {
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

    const topic = process.env.topicConditionFirstOn;

    client.on("connect", () => {
      console.log("Connected");
      client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
      });
    });

    client.on("message", async (topic: string, payload: any) => {
      publishCondtion();
    });
  } catch (err) {
    console.log(err);
  }
};

export default firstOn;
