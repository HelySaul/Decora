import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/shared-classes';
import {LoginService} from '../services/login/login-service';
import {SignupmodalComponent} from "../signupmodal/signupmodal.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {DeletemodalComponent} from "../deletemodal/deletemodal.component";

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})
export class UserloggedComponent implements OnInit {

  user: User = new User();
  userList: User[] = [];

  constructor(private loginService: LoginService, public dialog: MatDialog,  public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.loginService.isAnyUserActive()) {
      this.user = this.loginService.getActiveUser();
    }
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.userList = this.loginService.getUserList();
  }

  openSignUpModal(): void {
    let dialogSigninModalRef = this.dialog.open(SignupmodalComponent, {
      width: '250px',
    });
    const sub = dialogSigninModalRef.componentInstance.onAdd.subscribe(() => {
      this.userList = this.loginService.getUserList();
    });
  }

  openDeleteModal(user: User):void {
    let dialogDeleteModalRef = this.dialog.open(DeletemodalComponent, {
      width: '300px',
      data: {
        nome: user.nome
      }
    });
    const sub = dialogDeleteModalRef.componentInstance.onDelete.subscribe(() => {
      console.log("hehehe");
      const response = this.loginService.removeUser(user);
      if(response.ok){
        this.userList = this.loginService.getUserList();
        this.snackBar.open(response.message, 'Fechar', {
          duration: 3000
        });
      }
    });
  }

  onDelete() {

  }

}

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class UserloggedModule {
}

