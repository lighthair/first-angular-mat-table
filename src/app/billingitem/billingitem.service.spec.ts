import { TestBed } from '@angular/core/testing';

import { BillingItemService } from './billingitem.service';

describe('BillingitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingItemService = TestBed.get(BillingItemService);
    expect(service).toBeTruthy();
  });
});
