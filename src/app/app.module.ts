import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AuthService } from "./services/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDAUT1VrYuEpw7ZqLhDMp4lBXXX1j_NYYo",
  authDomain: "angularfire2-8ae47.firebaseapp.com",
  databaseURL: "https://angularfire2-8ae47.firebaseio.com",
  projectId: "angularfire2-8ae47",
  storageBucket: "angularfire2-8ae47.appspot.com",
  messagingSenderId: "711574640048"
}

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    ServicesComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
