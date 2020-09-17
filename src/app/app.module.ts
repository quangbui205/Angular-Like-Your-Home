
// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore

import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './layouts/home/home.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RegisterComponent} from './customers/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './customers/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './houses/list/list.component';

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
