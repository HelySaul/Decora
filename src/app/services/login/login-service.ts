import {Injectable} from '@angular/core';
import {Response, User} from '../../shared/shared-classes';

@Injectable()
export class LoginService {

  users: User[] = [];

  constructor() {
  }

  public addUser(user: User, firstAdmin = false): Response {
    this.users = this.getUserList();
    const response = new Response();
    this.users.forEach(us => {
      if (us.email === user.email) {
        response.ok = false;
        response.message = 'O email já está registrado';
        return response;
      }
    });
    this.users.push(user);
    localStorage.setItem('userList', JSON.stringify(this.users));
    response.ok = true;
    response.message = 'Usuário registrado com sucesso';
    return response;
  }

  public addFirstAdmin(user: User) {
    this.users = this.getUserList() === null ? [] : this.getUserList();
    if (this.users.length < 1) {
      this.users.push(user);
      localStorage.setItem('userList', JSON.stringify(this.users));
    }
  }

  public getUsers(): User[] {
    return null;
  }

  public removeUser() {
    return null;
  }

  private getUserList() {
    return JSON.parse(localStorage.getItem('userList'));
  }
}
