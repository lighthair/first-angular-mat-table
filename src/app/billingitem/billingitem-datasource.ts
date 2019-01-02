import {CollectionViewer, DataSource, } from "@angular/cdk/collections";
import {BillingItem} from "./billingitem";
import {BillingItemService} from "./billingitem.service";
import {BehaviorSubject, Observable, of} from 'rxjs';

export class BillingitemDatasource implements DataSource<BillingItem>{
   
    private billingSubject = new BehaviorSubject<BillingItem[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private billingItemService: BillingItemService) {}

    connect(collectionViewer: CollectionViewer): Observable<BillingItem[]> {
        return this.billingSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.billingSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(courseId: string, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.billingItemService.findBill(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            () => of([]),
            () => of([])
        )
        .subscribe(lessons => this.billingSubject.next(lessons));
    }    
}
