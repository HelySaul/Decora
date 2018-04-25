import {Component, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

export class Login {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  login = new Login();
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  senhaControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>, public router: Router, public snackBar: MatSnackBar) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onEntrar(): void {
    if(!this.emailControl.invalid && !this.senhaControl.invalid){
      this.snackBar.open('Email ou senha errada', 'Fechar');
    }
  }

  getEmailErro(): string {
    return this.emailControl.hasError('required') ? 'Deve digitar um email' :
      this.emailControl.hasError('email') ? 'Email invalido' :
        '';
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

