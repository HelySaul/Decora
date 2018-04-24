import {Component, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {FormControl, FormsModule, Validators} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

export class User {
  nome: string;
  email: string;
  senha: string;
  telefone: number;
}

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})

export class SignupmodalComponent {

  user: User = new User();

  regexSoNumeros: RegExp = new RegExp("^[0-9]*$");
  nomeControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  telefoneControl = new FormControl('', [Validators.required, Validators.pattern(this.regexSoNumeros)]);
  senhaControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  users: Observable<any[]>;

  constructor(public dialogRef: MatDialogRef<SignupmodalComponent>, public snackBar: MatSnackBar,
              private router: Router) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getNomeErro(): string {
    return this.nomeControl.hasError('required') ? 'Deve digitar seu nome' :
      this.nomeControl.hasError('minlength') ? 'O nome deve ter mais de 3 letras' : '';
  }

  getEmailErro(): string {
    return this.emailControl.hasError('required') ? 'Deve digitar um email' :
      this.emailControl.hasError('email') ? 'Email invalido' : '';
  }

  getTelefoneErro(): string {
    return this.telefoneControl.hasError('required') ? 'Deve digitar um número de telefone' :
      this.telefoneControl.hasError('pattern') ? 'Apenas números permitidos' : '';
  }

  getSenhaErro(): string {
    return this.senhaControl.hasError('required') ? 'Deve digitar uma senha' : '';
  }

  getData(): string {
    const todayDate = new Date();
    return (todayDate.getFullYear() + '/' + ((todayDate.getMonth() + 1)) + '/' + todayDate.getDate() + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds());
  }

  onRegister(): void {
    if (!this.nomeControl.invalid && !this.emailControl.invalid && !this.telefoneControl.invalid && !this.senhaControl.invalid) {

      this.snackBar.open('Tem que preencher tuda a informação', 'Fechar');
    }
  }

}

@NgModule({
  declarations: [SignupmodalComponent],
  imports: [FormsModule],
  exports: []
})
export class SigninmodalstModule {
}
