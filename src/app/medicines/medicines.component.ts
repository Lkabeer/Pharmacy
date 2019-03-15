import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../app.component";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  constructor(public app: AppComponent) {

  }

  ngOnInit() {
  }

}