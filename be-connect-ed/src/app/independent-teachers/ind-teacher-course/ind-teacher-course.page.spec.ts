import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherCoursePage } from './ind-teacher-course.page';

describe('IndTeacherCoursePage', () => {
  let component: IndTeacherCoursePage;
  let fixture: ComponentFixture<IndTeacherCoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
