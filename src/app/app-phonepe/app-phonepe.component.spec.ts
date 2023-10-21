import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhonepeComponent } from './app-phonepe.component';

describe('AppPhonepeComponent', () => {
  let component: AppPhonepeComponent;
  let fixture: ComponentFixture<AppPhonepeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPhonepeComponent]
    });
    fixture = TestBed.createComponent(AppPhonepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
