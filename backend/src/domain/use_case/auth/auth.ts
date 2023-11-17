const checkAuth = (
  username: string,
  password: string,
  userRepository: any,
  authService: any
) => {
  if (!username || !password) {
    const error = new Error("email and password fields cannot be empty");
    throw error;
  }
  return userRepository.findByProperty({ username }).then((user: any) => {
    if (!user.length) {
      const error = new Error("Invalid email or password");
      throw error;
    }
    const isMatch = authService.compare(password, user[0].password);
    if (!isMatch) {
      const error = new Error("email or password not Match");
      throw error;
    }
    const payload = {
      user: {
        id: user[0].id,
        email: user[0].email,
        username: user[0].username,
      },
    };
    return authService.generateToken(payload);
  });
};

export default checkAuth;
