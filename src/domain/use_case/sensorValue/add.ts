import valueSensor from "../../../entities/sensorValue";

const addSensorValueUseCase = (
    value: number, sensorId: number, repository: any
) => {

    if (!value || !sensorId) {
        throw new Error("value,sensorId cannot be empty");
    }

    const newValueSensor = valueSensor(
        value,
        sensorId
    );

    return repository.add(newValueSensor)
};

export default addSensorValueUseCase;
