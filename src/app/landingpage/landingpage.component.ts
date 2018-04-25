import {Component, NgModule, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SigninmodalComponent} from '../signinmodal/signinmodal.component';
import {SignupmodalComponent} from '../signupmodal/signupmodal.component';
import {LoginService} from "../services/login/login-service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})

export class LandingpageComponent implements OnInit {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, public loginService: LoginService, public router: Router) {}

  ngOnInit() {
    if(this.loginService.isAnyUserActive()){
      this.router.navigate(['user']);
    }
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SigninmodalComponent, {
      width: '270px',
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignupmodalComponent, {
      width: '250px',
    });
  }
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class LandingpageModule {
}
