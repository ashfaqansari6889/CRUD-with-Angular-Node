import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './myComponents/create-user/create-user.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { LoginComponent } from './myComponents/login/login.component';
import { MyAccountComponent } from './myComponents/my-account/my-account.component';
import { SignUpComponent } from './myComponents/sign-up/sign-up.component';
import { UsersComponent } from './myComponents/users/users.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'create', component : CreateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'create/:id', component : CreateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'users', component : UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'myaccount', component : MyAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'signup', component : SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
