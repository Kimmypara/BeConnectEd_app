import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherNotificationsPage } from './teacher-notifications.page';

describe('TeacherNotificationsPage', () => {
  let component: TeacherNotificationsPage;
  let fixture: ComponentFixture<TeacherNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
