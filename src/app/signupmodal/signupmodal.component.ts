import {Component, NgModule} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {FormControl, FormsModule, Validators} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

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
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.scss']
})

export class SignupmodalComponent {

  user: User = new User();

  regexOnlyNumbers: RegExp = new RegExp("^[0-9]*$");
  fullnameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  phoneControl = new FormControl('', [Validators.required, Validators.pattern(this.regexOnlyNumbers), Validators.maxLength(9), Validators.minLength(9)]);
  passwordControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  users: Observable<any[]>;

  constructor(public dialogRef: MatDialogRef<SignupmodalComponent>, public db: AngularFireDatabase, public snackBar: MatSnackBar,
              private router: Router) {
  }

  makeid(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getFullnameErrorMessage(): string {
    return this.fullnameControl.hasError('required') ? 'You must enter your name' :
      this.fullnameControl.hasError('minlength') ? 'Name must have more than 3 letters' : '';
  }

  getEmailErrorMessage(): string {
    return this.emailControl.hasError('required') ? 'You must enter an email' :
      this.emailControl.hasError('email') ? 'Invalid email' : '';
  }

  getPhoneErrorMessage(): string {
    return this.phoneControl.hasError('required') ? 'You must enter a phone number' :
      this.phoneControl.hasError('pattern') ? 'The phone must be numeric' :
        this.phoneControl.hasError('maxlength') ? 'The phone must be of 9 digits' :
          this.phoneControl.hasError('minlength') ? 'The phone must be of 9 digits' : '';
  }

  getPasswordErrorMessage() {
    return this.passwordControl.hasError('required') ? 'You must enter a password' : '';
  }

  getDate(): string {
    const todayDate = new Date();
    return (todayDate.getFullYear() + '/' + ((todayDate.getMonth() + 1)) + '/' + todayDate.getDate() + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds());
  }

  onRegister(): void {
    if (!this.fullnameControl.invalid && !this.emailControl.invalid && !this.phoneControl.invalid && !this.passwordControl.invalid) {

      this.users = this.db.list('/users').valueChanges();
      this.users.subscribe(usersList => {
        let userExists: boolean = false;
        usersList.forEach(user => {
          if (user.content.email == this.user.email)
            userExists = true;
        });
        if (userExists) {
          this.snackBar.open('The user is already registered', 'Close');
        } else {
          const id = this.makeid();
          this.user.id = id;
          this.user.registrationDate = this.getDate();
          this.db.list('/users').push({content: this.user});
          this.user = new User();
          this.dialogRef.close();
          this.router.navigate(['user'], {queryParams: {id}});
        }
      });

    } else {
      this.snackBar.open('You must fill all the information', 'Close');
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
