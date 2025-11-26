import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrolmentPage } from './enrolment.page';

describe('EnrolmentPage', () => {
  let component: EnrolmentPage;
  let fixture: ComponentFixture<EnrolmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
