import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherNotificationsPage } from './ind-teacher-notifications.page';

describe('IndTeacherNotificationsPage', () => {
  let component: IndTeacherNotificationsPage;
  let fixture: ComponentFixture<IndTeacherNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
