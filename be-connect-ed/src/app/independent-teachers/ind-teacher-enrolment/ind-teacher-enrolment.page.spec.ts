import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherEnrolmentPage } from './ind-teacher-enrolment.page';

describe('IndTeacherEnrolmentPage', () => {
  let component: IndTeacherEnrolmentPage;
  let fixture: ComponentFixture<IndTeacherEnrolmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherEnrolmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
