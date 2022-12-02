import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPages } from './pages/sign-in/sign-in.pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SignInPages,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
