import condition from "../../../entities/condition";

const addConditionUseCase = (upperDanger: number, upperWarning: number, lowerDanger: number, lowerWarning: number, sensorId: number, repository: any) => {
    if (!upperDanger || !upperWarning || !lowerDanger || !lowerWarning) {
        throw new Error("condition setpoint cannot be empty");
    }

    const newcondition = condition(upperDanger, upperWarning, lowerDanger, lowerWarning, sensorId);

    return repository.checkSensorRepo(sensorId).then(
        (room: any) => {
            if (!room.length) {
                throw new Error(`Sensor Id not Found`);
            }
            return repository.addRepo(newcondition);
        })
};

export default addConditionUseCase;
