import { AuthGuard } from './../auth.guard';
import { AuthService } from './../auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { SuccessfulRegisterComponent } from './successful-register/successful-register.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ModalNotRegisteredComponent } from './modal-not-registered/modal-not-registered.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UserRegisterComponent,
    UserHomeComponent,
    LoginComponent,
    SuccessfulRegisterComponent,
    AccessDeniedComponent,
    ModalNotRegisteredComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthGuard, AuthService],
  entryComponents: [ModalNotRegisteredComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
