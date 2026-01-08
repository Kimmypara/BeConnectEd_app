import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherCalendarPage } from './ind-teacher-calendar.page';

describe('IndTeacherCalendarPage', () => {
  let component: IndTeacherCalendarPage;
  let fixture: ComponentFixture<IndTeacherCalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
