import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/shared-classes';
import {LoginService} from '../services/login/login-service';


@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})
export class UserloggedComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService) {
  }

  ngOnInit() {

  }

}

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class UserloggedModule {
}

