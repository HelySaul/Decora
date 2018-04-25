import {Component, NgModule} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SigninmodalComponent} from '../signinmodal/signinmodal.component';
import {SignupmodalComponent} from '../signupmodal/signupmodal.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})

export class LandingpageComponent {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

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
