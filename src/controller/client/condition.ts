const mqtt = require("mqtt");
const clientId = `mqttScofindo_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://broker.hivemq.com:1883/mqtt`;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

const client = mqtt.connect(connectUrl, {
  clientId,
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  connectTimeout: 30 * 1000,
  rejectUnauthorized: false,
  reconnectPeriod: 1000,
});

const publishCondtion = async () => {
  try {
    const topic = "sucofindo/change/condition";

    let message = await prisma.condition.findMany({});

    client.publish(topic, JSON.stringify(message), { qos: 0, retain: false });
  } catch (err) {
    console.log(err);
  }
};

export default publishCondtion;
