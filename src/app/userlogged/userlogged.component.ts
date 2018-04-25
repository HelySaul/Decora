import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/shared-classes';
import {LoginService} from '../services/login/login-service';
import {SignupmodalComponent} from "../signupmodal/signupmodal.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})
export class UserloggedComponent implements OnInit {

  user: User = new User();
  userList: User[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService, public dialog: MatDialog) {
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
    let dialogModalRef = this.dialog.open(SignupmodalComponent, {
      width: '250px',
    });
    const sub = dialogModalRef.componentInstance.onAdd.subscribe(() => {
      this.userList = this.loginService.getUserList();
    });
  }

}

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class UserloggedModule {
}

