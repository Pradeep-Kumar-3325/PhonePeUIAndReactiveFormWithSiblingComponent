import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhonepePaymentstatusComponent } from './app-phonepe-paymentstatus.component';

describe('AppPhonepePaymentstatusComponent', () => {
  let component: AppPhonepePaymentstatusComponent;
  let fixture: ComponentFixture<AppPhonepePaymentstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPhonepePaymentstatusComponent]
    });
    fixture = TestBed.createComponent(AppPhonepePaymentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
