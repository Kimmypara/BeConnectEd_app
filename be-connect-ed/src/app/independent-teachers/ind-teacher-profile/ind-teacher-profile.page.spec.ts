import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherProfilePage } from './ind-teacher-profile.page';

describe('IndTeacherProfilePage', () => {
  let component: IndTeacherProfilePage;
  let fixture: ComponentFixture<IndTeacherProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
