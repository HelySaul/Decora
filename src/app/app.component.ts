import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {SignupmodalComponent} from './signupmodal/signupmodal.component';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from './shared/shared-classes';
import {LoginService} from './services/login/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, public loginService: LoginService) {
  }

  ngOnInit() {
    const mainAdmin = new User();
    mainAdmin.nome = 'Admin';
    mainAdmin.email = 'admin@decora.do';
    mainAdmin.senha = 'admin';
    mainAdmin.telefone = 123456789;
    mainAdmin.isAdmin = true;
    mainAdmin.isActive = false;
    this.loginService.addFirstAdmin(mainAdmin);

  }

  onLogout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  openSignInModal(): void {
    this.dialog.open(SigninmodalComponent, {
      width: '270px',
    });
  }

  openSignUpModal(): void {
    this.dialog.open(SignupmodalComponent, {
      width: '250px',
    });
  }

}

