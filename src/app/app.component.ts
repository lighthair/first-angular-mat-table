import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BillingItem } from './billingitem/billingitem';
import { BillingItemService } from './billingitem/billingitem.service';
import { Subscription } from 'rxjs';

import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const myDate = new Date();
const ELEMENT_DATA: BillingItem[] = [
  {
    date: new Date(),
    task: 'Training',
    client: 'FTEC',
    comment: '',
    units: 9.33,
    fee: 19,
    sum: 177,
    duration: myDate,
    bill: 100,
    _id: '123'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})



// see https://www.techiediaries.com/angular-material-table/
export class AppComponent implements OnInit, OnDestroy {
  title = 'Rechnung BFZ';
  displayedColumns: string[] = ['date', 'task', 'client', 'comment', 'units', 'fee', 'sum', 'id', 'action'];
  billingItems: BillingItem[] = [];
  subscription: Subscription;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private bs: BillingItemService, public dialog: MatDialog) {
  }

  ngOnInit() {
    try {
      this.subscription = this.bs.findAllItems().subscribe((elements: BillingItem[]) => {
        this.billingItems = elements;
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: BillingItem) {
    const d = new Date();
    let nItem = new BillingItem();
    nItem = { ...row_obj };
    nItem.date = d;
    return this.bs.addItem(nItem).subscribe((response) => {
      this.billingItems.push(nItem);
      this.table.renderRows();
    });

  }

  updateRowData(row_obj: BillingItem) {
    this.billingItems = this.billingItems.filter((value, key) => {
      if (value._id === row_obj._id) {
        value.comment = row_obj.comment;
      }
      return true;
    });
  }
  deleteRowData(row_obj: BillingItem) {
    return this.bs.deleteItem(row_obj._id).subscribe((response) => {
      console.log('deleted');
    });
    // this.billingItems = this.billingItems.filter((value, key) => {
    //   return value._id !== row_obj._id;
    // });
  }

}
