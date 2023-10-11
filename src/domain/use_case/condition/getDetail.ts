const getConditionDetailUseCase = (conditionId: number, repository: any) => {
    return repository.findByIdRepo(conditionId).then((condition: any) => {
        if (condition != null) {
            return condition
        }
        throw new Error("sensor not found")
    })
};

export default getConditionDetailUseCase;
