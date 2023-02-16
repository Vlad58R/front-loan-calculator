import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLoanComponent } from './housing-loan.component';

describe('HousingLoanComponent', () => {
  let component: HousingLoanComponent;
  let fixture: ComponentFixture<HousingLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
