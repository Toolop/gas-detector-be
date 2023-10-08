import user from "../../../entities/user";

export default function addUser(
  username: string,
  password: string,
  email: string,
  name: string,
  userRepository: any,
  authService: any
) {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!username || !password || !email) {
    throw new Error("username, password and email fields cannot be empty");
  }

  const newUser = user(
    username,
    authService.encryptPassword(password),
    email,
    name
  );

  return userRepository
    .findByProperty({ username })
    .then((userWithUsername: any) => {
      console.log(typeof userWithUsername);
      if (userWithUsername.length) {
        throw new Error(`User with username: ${username} already exists`);
      }
      return userRepository.findByProperty({ email });
    })
    .then((userWithEmail: any) => {
      console.log(userWithEmail);
      if (userWithEmail.length) {
        throw new Error(`User with email: ${email} already exists`);
      }
      return userRepository.add(newUser);
    });
}
