import { TestBed } from '@angular/core/testing';

import { HousingLoanService } from './housing-loan.service';

describe('HousingLoanService', () => {
  let service: HousingLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
