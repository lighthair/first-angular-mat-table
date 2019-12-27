import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillingItem } from './billingitem/billingitem';
import { BillingItemService } from './billingitem/billingitem.service';
import { Observable, Subscription } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
const myDate = new Date();
const ELEMENT_DATA: BillingItem[] = [
  {
    date: '1.1.1111',
    task: 'Training',
    client: 'FTEC',
    comment: '',
    units: 9.33,
    fee: 19,
    sum: 177,
    duration: myDate,
    bill: 100
  }
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BillingItemService]
})



// see https://www.techiediaries.com/angular-material-table/
export class AppComponent implements OnInit, OnDestroy {
  title = 'Rechnung BFZ';
  displayedColumns: string[] = ['date', 'task', 'client', 'comment', 'units', 'fee', 'sum'];
  billingItems: BillingItem[] = [];
  subscription: Subscription;

  constructor(private bs: BillingItemService) {
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
}
