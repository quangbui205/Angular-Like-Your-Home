
// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore

import {NgModule} from '@angular/core';
import {LoginComponent} from './customers/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './houses/list/list.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './layouts/home/home.component';
import {RegisterComponent} from './customers/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './layouts/navbar/navbar.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
