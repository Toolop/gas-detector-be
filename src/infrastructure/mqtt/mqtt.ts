const dotenv = require("dotenv");
const mqtt = require("mqtt");
const clientId = `mqttItera_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://broker.hivemq.com:1883/mqtt`;

const subscribeSensor = async () => {
    try {
        const client = await mqtt.connect(connectUrl, {
            clientId,
            keepalive: 30,
            protocolId: "MQTT",
            protocolVersion: 4,
            clean: true,
            connectTimeout: 30 * 1000,
            rejectUnauthorized: false,
            reconnectPeriod: 1000,
        });
        dotenv.config();

        const topic = "iterahero/sensor/#";
        client.on("connect", () => {
            console.log("Connected");
            client.subscribe([topic], () => {
                console.log(`Subscribe to topic '${topic}'`);
            });
        });

        client.on("message", async (topic: any, payload: any) => {
            try {
                let save = "";
                let getData = await JSON.parse(payload.toString());
                if (getData[0]) {
                    for (const i in getData) {
                        const sensorDB = await getSensor(getData[i].id_sensor);
                        const id_user = await getGreenHouse(sensorDB.id_greenhouse);
                        const formula = sensorDB.calibration;
                        const x = parseFloat(getData[i].value);
                        let value = 0;

                        if (formula) {
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
                        tempServer.push(fix_sensor);
                        if (tempServer[0])
                            if (await isAutomationExistidSensor(getData[i].id_sensor)) {
                                const list_automation = await getAutomation(
                                    getData[i].id_sensor
                                );
                                if (list_automation) {
                                    for (const auto in list_automation) {
                                        if (list_automation[auto].automationStatus == "1") {
                                            const actuatorDB = await getActuator(
                                                list_automation[auto].id_actuator
                                            );

                                            if (
                                                list_automation[auto].condition == "<" &&
                                                parseFloat(value) < sensorDB.range_min
                                            ) {
                                                if (
                                                    actuatorDB.status_lifecycle !=
                                                    list_automation[auto].status_lifecycle
                                                ) {
                                                    uploadActuatorLogUtil(
                                                        list_automation[auto].id_actuator,
                                                        list_automation[auto].status_lifecycle
                                                    );
                                                }
                                            } else if (
                                                list_automation[auto].condition == ">" &&
                                                parseFloat(value) > sensorDB.range_max
                                            ) {
                                                if (
                                                    actuatorDB.status_lifecycle !=
                                                    list_automation[auto].status_lifecycle
                                                ) {
                                                    uploadActuatorLogUtil(
                                                        list_automation[auto].id_actuator,
                                                        list_automation[auto].status_lifecycle
                                                    );
                                                }
                                            } else if (
                                                list_automation[auto].condition == "<" &&
                                                parseFloat(value) >
                                                parseFloat(sensorDB.range_min) +
                                                parseFloat(list_automation[auto].constanta)
                                            ) {
                                                if (list_automation[auto].status_lifecycle == "1") {
                                                    if (
                                                        actuatorDB.status_lifecycle ==
                                                        list_automation[auto].status_lifecycle
                                                    ) {
                                                        uploadActuatorLogUtil(
                                                            list_automation[auto].id_actuator,
                                                            0
                                                        );
                                                    }
                                                }
                                            } else if (
                                                list_automation[auto].condition == ">" &&
                                                parseFloat(value) <
                                                parseFloat(sensorDB.range_max) -
                                                parseFloat(list_automation[auto].constanta)
                                            ) {
                                                if (list_automation[auto].status_lifecycle == "1") {
                                                    if (
                                                        actuatorDB.status_lifecycle ==
                                                        list_automation[auto].status_lifecycle
                                                    ) {
                                                        uploadActuatorLogUtil(
                                                            list_automation[auto].id_actuator,
                                                            0
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
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

module.exports = { subscribeSensor };
