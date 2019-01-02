import { Component, OnInit } from '@angular/core';
import { BillingItem } from './billingitem/billingitem';
import { BillingItemService } from './billingitem/billingitem.service';

const NOW: Date = new Date();
const ELEMENT_DATA: BillingItem[] = [
  { date: "1.1.1111",
    task: "Training",
    client: "FTEC",
    comment: "",
    units: 9.33,
    fee: 19,
    sum: 177,
    duration: NOW,
    bill: 100 }
  ];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: []
})



// see https://www.techiediaries.com/angular-material-table/
export class AppComponent implements OnInit {
  title = "Hello World";
  displayedColumns  :  string[] = ['date', 'task', 'client', 'comment', 'units', 'fee', 'sum'];
  billingItems = ELEMENT_DATA;

  constructor(private billingItemService: BillingItemService) {
  }

  ngOnInit() {
  }

}