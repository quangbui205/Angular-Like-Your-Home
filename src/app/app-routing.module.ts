import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './customers/register/register.component';
import {HomeComponent} from './layouts/home/home.component';
import {LoginComponent} from './customers/login/login.component';
import {ListComponent} from './houses/list/list.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    children: [
      {path: '', component: HomeComponent},
      {path: 'list', component: ListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
