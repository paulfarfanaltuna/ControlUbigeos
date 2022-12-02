import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInPages } from './pages/sign-in/sign-in.pages';
import { AuthHttpModule } from './http/http.module';


@NgModule({
  declarations: [
    SignInPages
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthHttpModule
  ]
})
export class AuthModule { }
