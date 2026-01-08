import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentNotificationsPage } from './ind-student-notifications.page';

describe('IndStudentNotificationsPage', () => {
  let component: IndStudentNotificationsPage;
  let fixture: ComponentFixture<IndStudentNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
