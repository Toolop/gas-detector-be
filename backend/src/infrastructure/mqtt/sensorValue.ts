import express from "express";
import sensorValueRepository from "../../domain/repository/sensorValue";
import sensorValueDbRepository from "../mongoDb/db/sensor"
import sensorRepository from "../../domain/repository/sensor";
import sensorDbRepository from "../db/sensor/sensor";
import subscribeSensor from "../../controller/client/sensorValue"

const subscribe = () => {
    try {
        subscribeSensor(sensorValueRepository, sensorValueDbRepository, sensorRepository, sensorDbRepository,);
    }
    catch (err) {
        console.log(err)
    }

}
export default subscribe;