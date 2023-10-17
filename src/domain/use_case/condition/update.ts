import condition from "../../../entities/condition";

const updateConditionUseCase = async (upperDanger: number, upperWarning: number, lowerDanger: number, lowerWarning: number, id: number, repository: any) => {

    if (!upperDanger || !upperWarning || !lowerDanger || !lowerWarning) {
        throw new Error("condition setpoint cannot be empty");
    }

    return await repository.findByIdSensorRepo(id)
        .then((room: any) => {
            if (room === null) {
                throw new Error(`sensor not found`);
            }
            return repository.updateRepo(id, upperDanger, upperWarning, lowerDanger, lowerWarning);
        });
}

export default updateConditionUseCase;