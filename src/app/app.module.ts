import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupmodalComponent} from './signupmodal/signupmodal.component';
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {UserloggedComponent} from './userlogged/userlogged.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {HttpModule} from "@angular/http";

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
