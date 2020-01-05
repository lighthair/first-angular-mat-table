import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BillingItemService } from './billingitem.service';

describe('BillingitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: BillingItemService = TestBed.get(BillingItemService);
    expect(service).toBeTruthy();
  });
});
