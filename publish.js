const mqtt = require("mqtt");
const clientId = `mqttScofindo_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://broker.hivemq.com:1883/mqtt`;

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

const subscribeSensor = async () => {
  try {
    const topic = "scofindo/gasdetector/sensor/ahsiap";
    client.on("connect", () => {
      console.log("Connected");
      setInterval(function a() {
        let message = [
          {
            sensorId: 1,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 2,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 3,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 4,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 5,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 6,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 7,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 8,
            value: Math.floor(Math.random() * 100 + 0),
          },
          {
            sensorId: 9,
            value: Math.floor(Math.random() * 100 + 0),
          },
        ];

        client.publish(
          topic,
          JSON.stringify(message),
          { qos: 0, retain: false },
          function (error) {
            if (error) {
              console.log(error);
            } else {
              console.log("Published");
            }
          }
        );
      }, 10000);
    });
  } catch (err) {
    console.log(err);
  }
};

subscribeSensor();
