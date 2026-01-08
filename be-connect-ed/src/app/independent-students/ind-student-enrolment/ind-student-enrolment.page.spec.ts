import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentEnrolmentPage } from './ind-student-enrolment.page';

describe('IndStudentEnrolmentPage', () => {
  let component: IndStudentEnrolmentPage;
  let fixture: ComponentFixture<IndStudentEnrolmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentEnrolmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
