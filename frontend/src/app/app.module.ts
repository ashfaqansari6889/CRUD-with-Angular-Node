import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { LoginComponent } from './myComponents/login/login.component';
import { MyAccountComponent } from './myComponents/my-account/my-account.component';
import { UsersComponent } from './myComponents/users/users.component';
import { CreateUserComponent } from './myComponents/create-user/create-user.component';
import { AuthServiceService } from './myServices/auth-service.service';
import { ApiServiceService } from './myServices/api-service.service';
import { HeaderComponent } from './myComponents/header/header.component';
import { SignUpComponent } from './myComponents/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateUserComponent,
    UsersComponent,
    MyAccountComponent,
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthServiceService,
    ApiServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
