import { Injectable } from '@angular/core';
import { AuthHttpModule } from './http.module';

@Injectable({
  providedIn: AuthHttpModule
})
export class AuthService {

  constructor() { }
}
