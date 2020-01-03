
import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { BillingItem } from '../billingitem/billingitem';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action: string;
  local_data: any;
  selectedDate: Date;
  events: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: BillingItem) {
    console.log(data);
    this.local_data = { ...data };
    this.local_data.date = this.selectedDate;
    this.action = this.local_data.action;

  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Event>) {
    this.events.push(`${type}: ${event.value}`);
    this.local_data.date = event.target.value;
  }

  ngOnInit() {
  }

}
