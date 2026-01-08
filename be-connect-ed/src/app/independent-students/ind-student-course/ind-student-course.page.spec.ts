import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentCoursePage } from './ind-student-course.page';

describe('IndStudentCoursePage', () => {
  let component: IndStudentCoursePage;
  let fixture: ComponentFixture<IndStudentCoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
