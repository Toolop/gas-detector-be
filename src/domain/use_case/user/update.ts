import user from '../../../entities/user';

const updateUserUseCase = (username: string, password: string, email: string, name: string, userId: number, repository: any, authService: any) => {
    const updateUser = user(
        username, authService.encryptPassword(password), email, name
    );

    return repository.findById(userId)
        .then((Sensor: any) => {
            if (Sensor === null) {
                throw new Error(`sensor not found`);
            }
            if (name) {
                return repository.updateRepo(userId, updateUser);
            }
            throw new Error("name must be not empty");
        });
}

export default updateUserUseCase;
