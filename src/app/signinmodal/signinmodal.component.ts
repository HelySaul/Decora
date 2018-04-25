import {Component, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {Login} from "../shared/shared-classes";
import {LoginService} from "../services/login/login-service";

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  login = new Login();
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  senhaControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>, public router: Router, public snackBar: MatSnackBar,
              private loginService: LoginService) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onEntrar(): void {
    if (!this.emailControl.invalid && !this.senhaControl.invalid) {
      if(this.loginService.login(this.login).ok){
        this.dialogRef.close();
        this.router.navigate(['user']);
      }else {
        this.snackBar.open('Email ou senha errada', 'Fechar');
      }
    }
  }

  getEmailErro(): string {
    return this.emailControl.hasError('required') ? 'Deve digitar um email' :
      this.emailControl.hasError('email') ? 'Email invalido' : '';
  }

  getSenhaErro(): string {
    return this.senhaControl.hasError('required') ? 'Deve digitar uma senha' : '';
  }
}

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}

