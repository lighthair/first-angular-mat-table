import { Injectable } from '@angular/core';
import { BillingItem } from './billingitem';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../config/appconfig';

@Injectable({
  providedIn: 'root'
})

export class BillingItemService {

  billingItems: BillingItem[] = [];
  constructor(private http: HttpClient) {
  }

  // Simulate POST /billingItem
  addItem(billingItem: BillingItem) {
    this.http.post(`${appConfig.url}/bills`, billingItem)
      .subscribe(res => console.log('Done'));
  }

  findBill(courseId: string, filter: string, sortDirection: string,
    pageIndex: number, pageSize: number): Observable<BillingItem[]> {
    return of(this.billingItems);
  }

  findAllItems(): Observable<Object> {
    console.log('findAllItems...');
    return this.http.get(`${appConfig.url}/bills`);
  }

  deleteItem(id: string) {
    console.log('billingservice: delete...');
    return this.http.delete(`${appConfig.url}/bills/${id}`);
  }
}
