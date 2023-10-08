export default function authService(service: any) {
  const encryptPassword = (password: string) =>
    service.encryptPassword(password);

  const compare = (password: string, hashedPassword: string) =>
    service.compare(password, hashedPassword);

  const verify = (token: string) => service.verify(token);

  const generateToken = (payload: any) => service.generateToken(payload);

  return {
    encryptPassword,
    compare,
    verify,
    generateToken,
  };
}
