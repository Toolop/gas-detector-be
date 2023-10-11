const deleteConditionUseCase = (conditionId: number, repository: any) => {

    return repository.findByIdRepo(conditionId)
        .then((condition: any) => {
            if (condition === null) {
                throw new Error(`Condition not found`);
            }
            return repository.deleteRepo(conditionId);
        });
}

export default deleteConditionUseCase;
