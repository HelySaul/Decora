import {Component, EventEmitter, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Response, User} from '../shared/shared-classes';
import {LoginService} from '../services/login/login-service';


@Component({
  selector: 'app-signinmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})

export class SignupmodalComponent {

  user: User = new User();
  onAdd = new EventEmitter();

  regexSoNumeros: RegExp = new RegExp('^[0-9]*$');
  nomeControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  telefoneControl = new FormControl('', [Validators.required, Validators.pattern(this.regexSoNumeros)]);
  senhaControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(public dialogRef: MatDialogRef<SignupmodalComponent>, public snackBar: MatSnackBar,
              private router: Router, private loginService: LoginService) {
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

  onRegister(): void {
    if (!this.nomeControl.invalid && !this.emailControl.invalid && !this.telefoneControl.invalid && !this.senhaControl.invalid) {
      this.user.isActive = !this.showAdminControl();
      if (typeof this.user.isAdmin == "undefined")
        this.user.isAdmin = false;
      const response: Response = this.loginService.addUser(this.user);
      if (response.ok) {
        this.dialogRef.close();
        if (this.user.isActive) {
          this.router.navigate(['user']);
        } else {
          this.onAdd.emit();
          this.snackBar.open(response.message, 'Fechar', {
            duration: 3000
          });
        }
      } else {
        this.snackBar.open(response.message, 'Fechar', {
          duration: 3000
        });
      }
    }
  }

  showAdminControl() {
    if (this.loginService.isAnyUserActive()) {
      if (this.loginService.getActiveUser().isAdmin) {
        return true;
      }
      return false;
    }
    return false;
  }

}

@NgModule({
  declarations: [],
  imports: [FormsModule],
  exports: []
})
export class SigninmodalstModule {
}
