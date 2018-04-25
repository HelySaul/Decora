import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupmodalComponent} from './signupmodal/signupmodal.component';
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {UserloggedComponent} from './userlogged/userlogged.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {LoginService} from './services/login/login-service';

@NgModule({
  declarations: [
    AppComponent,
    SignupmodalComponent,
    SigninmodalComponent,
    UserloggedComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
