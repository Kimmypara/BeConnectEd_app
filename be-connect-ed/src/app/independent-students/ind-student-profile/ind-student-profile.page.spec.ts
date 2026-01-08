import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentProfilePage } from './ind-student-profile.page';

describe('IndStudentProfilePage', () => {
  let component: IndStudentProfilePage;
  let fixture: ComponentFixture<IndStudentProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
