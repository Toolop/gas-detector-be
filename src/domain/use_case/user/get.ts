import user from "src/entities/user";

const getUserById = (
  id: number,
  userRepository: any,
  authService: any
) => {
  return userRepository
    .findById(id)
    .then((user: any) => {
      if (!user) {
        throw new Error(`User with id: ${id} does not exist`);
      }
      return user;
    });
}

export default getUserById;