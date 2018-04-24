import {Component, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

export class Login {
  email: string;
  password: string;
}

export class User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  phone: number;
  registrationDate: string;
}

@Component({
  selector: 'app-signinmodal',
  templateUrl: './signinmodal.component.html',
  styleUrls: ['./signinmodal.component.scss']
})
export class SigninmodalComponent {

  login = new Login();
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  passwordControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  users: Observable<any[]>;

  constructor(public dialogRef: MatDialogRef<SigninmodalComponent>, public router: Router, public db: AngularFireDatabase, public snackBar: MatSnackBar) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    if (!this.emailControl.invalid && !this.passwordControl.invalid) {
      this.users = this.db.list('/users').valueChanges();
      this.users.subscribe(usersList => {
        let registeredUser = new User();
        let userExists: boolean = false;
        let id = '';
        usersList.forEach(user => {
          if (user.content.email == this.login.email) {
            userExists = true;
            id = user.content.id;
            registeredUser = user.content;
          }
        });
        if (userExists) {
          if (registeredUser.password == this.login.password) {
            this.dialogRef.close();
            this.router.navigate(['user'], {queryParams: {id}});
          } else {
            this.snackBar.open('Wrong email or password', 'Close');
          }
        } else {
          this.snackBar.open('Wrong email or password', 'Close');
        }
      });
    }
  }

  getEmailErrorMessage(): string {
    return this.emailControl.hasError('required') ? 'You must enter an email' :
      this.emailControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage(): string {
    return this.passwordControl.hasError('required') ? 'You must enter a password' : '';
  }
}

@NgModule({
  declarations: [SigninmodalComponent],
  imports: [],
  exports: []
})
export class SigninmodalstModule {
}

