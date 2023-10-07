class User {
  name: string = ''
  email: string = ''
  password: String = ''

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;