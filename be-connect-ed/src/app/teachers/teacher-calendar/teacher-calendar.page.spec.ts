import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherCalendarPage } from './teacher-calendar.page';

describe('TeacherCalendarPage', () => {
  let component: TeacherCalendarPage;
  let fixture: ComponentFixture<TeacherCalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
