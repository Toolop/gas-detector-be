const dotenv = require("dotenv");
const mqtt = require("mqtt");

const subscribeSensor = async (
  sensorValueDbRepository: any,
  sensorValueDbRepositoryImpl: any,
  sensorDbRepository: any,
  sensorDbRepositoryImpl: any
) => {
  try {
    dotenv.config();

    const sensorRepository = sensorDbRepository(sensorDbRepositoryImpl());
    const sensorValueRepository = sensorValueDbRepository(
      sensorValueDbRepositoryImpl()
    );

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

    const topic = process.env.topicSensor;
    client.on("connect", () => {
      console.log("Connected");
      client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
      });
    });

    client.on("message", async (topic: string, payload: any) => {
      try {
        let save = "";
        let getData = await JSON.parse(payload.toString());

        if (getData[0]) {
          for (const i in getData) {
            const sensorDB = await sensorRepository.findById(
              parseInt(getData[i].sensorId)
            );
            let formula: any = "";
            if (sensorDB === null) {
              formula = null;
            } else {
              formula = sensorDB.calibration;
            }
            const x: number = parseFloat(getData[i].value);
            let value: number = 0;
            if (formula != null) {
              value = await eval(formula).toFixed(2);
              if (value <= 0) {
                value = 0;
              }
            } else {
              value = x;
            }

            const fix_sensor = await {
              sensorId: getData[i].sensorId,
              value: value,
            };
            save = await sensorValueRepository.add(fix_sensor);
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export default subscribeSensor;
