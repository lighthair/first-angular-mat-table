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

  addItem(billingItem: BillingItem): Observable<Object> {
    return this.http.post(`${appConfig.url}/bills`, billingItem);
  }

  findBill(courseId: string, filter: string, sortDirection: string,
    pageIndex: number, pageSize: number): Observable<BillingItem[]> {
    return of(this.billingItems);
  }

  findAllItems(): Observable<Object> {
    return this.http.get(`${appConfig.url}/bills`);
  }

  deleteItem(id: string) {
    const url = `${appConfig.url}/bills/${id}`;
    try {
      return this.http.delete(url);
    } catch (error) {
      console.error('delete failed:' + error);
    }
  }
}
