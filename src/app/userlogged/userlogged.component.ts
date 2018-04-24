import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

export class User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  phone: number;
  registrationDate: string;
}

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})
export class UserloggedComponent implements OnInit{

  user: User = new User();
  users: Observable<any[]>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

}

@NgModule({
  imports: [],
  exports: []
})
export class UserloggedModule {
}

