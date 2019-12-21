import { Injectable } from '@angular/core';
import { BillingItem } from './billingitem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BillingItemService {

  billingItems: BillingItem[] = [];
  constructor() {
    const myDate = new BillingItem({Date:  '1.1.1111'});
    this.addItem(myDate);

  }


  // Simulate POST /billingItem
  addItem(billingItem: BillingItem): BillingItemService {

    this.billingItems.push(billingItem);
    return this;
  }

  findBill(courseId: string, filter: string, sortDirection: string,
     pageIndex: number, pageSize: number): Observable<BillingItem[]> {
    return of(this.billingItems);
  }
}
