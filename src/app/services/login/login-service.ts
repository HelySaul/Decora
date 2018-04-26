import {Injectable} from '@angular/core';
import {Login, Response, User} from '../../shared/shared-classes';

@Injectable()
export class LoginService {

  users: User[] = [];

  constructor() {
  }

  public addUser(user: User): Response {
    this.users = this.getUserList();
    const response = new Response();
    let userExists = false;
    this.users.forEach(us => {
      if (us.email === user.email) {
        userExists = true;
      }
    });
    if(userExists) {
      response.ok = false;
      response.message = 'O email já está registrado';
      return response;
    }else {
      this.users.push(user);
      localStorage.setItem('userList', JSON.stringify(this.users));
      response.ok = true;
      response.message = 'Usuário registrado com sucesso';
      return response;
    }
  }

  public addFirstAdmin(user: User): void {
    const userList = this.getUserList();
    this.users = userList === null ? [] : userList;
    if (this.users.length < 1) {
      this.users.push(user);
      localStorage.setItem('userList', JSON.stringify(this.users));
    }
  }

  public removeUser(user: User): Response {
    const userList: User[] = this.getUserList();
    const response: Response = new Response();
    let nome: string;
    userList.forEach((us, index) => {
      if(us.email === user.email){
        nome = user.nome;
        userList.splice(index, 1);
      }
    });
    localStorage.setItem("userList", JSON.stringify(userList));
    response.ok = true;
    response.message = "Usuário "+ nome +" excluído com sucesso";
    return response;
  }

  public login(login: Login): Response {
    const response: Response = new Response();
    const userList: User[] = this.getUserList();
    let activeUser: User = new User();
    let userExists: boolean = false;
    let elementPosition : number;
    userList.forEach((user, index) =>{
      if (login.email === user.email){
        userExists = true;
        activeUser = user;
        activeUser.isActive = true;
        elementPosition = index;
        localStorage.setItem("userList", JSON.stringify(userList));
      }
    });
    if (userExists) {
      userList.splice(elementPosition, 1, activeUser);
      response.ok = true;
    } else {
      response.ok = false;
      response.message = "Email ou senha incorretos";
    }
    return response;
  }

  public logout(): void {
    const userList: User[] = this.getUserList();
    const newUserList : User[] = [];
    userList.forEach(user => {
      user.isActive = false;
      newUserList.push(user);
    });
    localStorage.setItem("userList", JSON.stringify(userList));
  }

  public isAnyUserActive(): boolean {
    const userList: User[] = this.getUserList();
    let isUserActive = false;
    userList.forEach(user => {
      if(user.isActive) {
        isUserActive = true;
      }
    })
    return isUserActive;
  }

  public getActiveUser(): User {
    const userList: User[] = this.getUserList();
    let activeUser: User = new User();
    userList.forEach(user => {
      if(user.isActive) {
        activeUser = user;
      }
    });
    return activeUser;
  }

  public getUserList(): User[] {
    return JSON.parse(localStorage.getItem('userList'));
  }
}
