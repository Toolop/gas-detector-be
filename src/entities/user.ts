export class User {
  public id: number;
  public username: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(id: number, name: string, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
