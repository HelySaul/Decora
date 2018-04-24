import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {SignupmodalComponent} from "./signupmodal/signupmodal.component";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showLogout: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['id']) {
        this.showLogout = true;
      } else {
        this.showLogout = false;
      }
    });
  }

  onLogout(): void {
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

