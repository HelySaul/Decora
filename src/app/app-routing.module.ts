import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserloggedComponent} from "./userlogged/userlogged.component";
import {SigninmodalComponent} from "./signinmodal/signinmodal.component";
import {SignupmodalComponent} from "./signupmodal/signupmodal.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'user', component: UserloggedComponent},
  {path: 'signin', component: SigninmodalComponent},
  {path: 'signup', component: SignupmodalComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
