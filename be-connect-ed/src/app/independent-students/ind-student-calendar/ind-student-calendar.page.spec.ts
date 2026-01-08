import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentCalendarPage } from './ind-student-calendar.page';

describe('IndStudentCalendarPage', () => {
  let component: IndStudentCalendarPage;
  let fixture: ComponentFixture<IndStudentCalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
