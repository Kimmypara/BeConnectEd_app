import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherEnrolmentPage } from './teacher-enrolment.page';

describe('TeacherEnrolmentPage', () => {
  let component: TeacherEnrolmentPage;
  let fixture: ComponentFixture<TeacherEnrolmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEnrolmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
