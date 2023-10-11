import condition from "../../../entities/condition";

const updateConditionUseCase = async (upperDanger: number, upperWarning: number, lowerDanger: number, lowerWarning: number, id: number, repository: any) => {
    console.log(upperDanger, upperWarning, lowerDanger, lowerWarning, id)
    if (!upperDanger || !upperWarning || !lowerDanger || !lowerWarning) {
        throw new Error("condition setpoint cannot be empty");
    }

    const updateCondition = condition(upperDanger, upperWarning, lowerDanger, lowerWarning, id);

    return await repository.findByIdRepo(id)
        .then((room: any) => {
            if (room === null) {
                throw new Error(`room not found`);
            }
            return repository.updateRepo(id, updateCondition);
        });
}

export default updateConditionUseCase;