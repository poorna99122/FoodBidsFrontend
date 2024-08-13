import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

  const routes: Routes = [
    { path: 'login', component: UserLoginComponent }, // Default route
    { path: 'register', component: UserRegistrationComponent }, // Registration route
    // { path: '', component: UserRegistrationComponent }, // Registration route

  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
