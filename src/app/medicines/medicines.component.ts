import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppComponent } from "../app.component";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  @ViewChild('updateText') updateText: ElementRef;

  medicineRef: AngularFireList<any>;
  medicines$: Observable<any[]>;

  newMedicineX: string = '';
  editMedicineX: boolean = false;
  editId: number;

  constructor(public db: AngularFireDatabase, public app: AppComponent) {
    this.medicineRef = db.list('/medicines');
    this.loadMembers(false);

    app.showX = false;
  }

  addMember(newName: string) {
    this.medicineRef.push({ text: newName });
    this.newMedicineX = '';
  }

  editMember(i) {
    this.editMedicineX = true;
    this.editId = i;
    setTimeout( () => this.updateText.nativeElement.focus());
  }

  updateMember(key: string, newText: string) {
    this.medicineRef.update(key, { text: newText });
    this.editMedicineX = false;
  }

  deleteMember(key: string) {
    if(confirm('R u sure u wanna delete this?!'))
      this.medicineRef.remove(key);
  }

  loadMembers(filterX) {
    // Use snapshotChanges().map() to store the key
    this.medicines$ = this.medicineRef.snapshotChanges().pipe(
      map(changes => {
        //filter Members X-Team 
        changes = (filterX) ?
          changes.filter(changes => changes.payload.val().text.toLowerCase().includes(filterX.toLowerCase())) :
          changes;
        // Sort Alphabetical X-Team
        changes = changes.sort((a, b) => a.payload.val().text.toLowerCase() < b.payload.val().text.toLowerCase() ? -1 : 1);
        // key and value X-Team
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  
  ngOnInit() {
  }

}
