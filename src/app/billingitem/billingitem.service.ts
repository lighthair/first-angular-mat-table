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
  addItem(billingItem: BillingItem): Observable<Object> {
    return this.http.post(`${appConfig.url}/bills`, billingItem);
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
    const url = `${appConfig.url}/bills/${id}`;
    console.log('billingservice: delete...' + url);
    try {
      return this.http.delete(url);

    } catch (error) {
      console.error('delete failed:' + error);
    }
  }
}
