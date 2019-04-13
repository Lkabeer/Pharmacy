import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'medicines', component: MedicinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
