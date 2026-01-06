import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherHomePage } from './ind-teacher-home.page';

describe('IndTeacherHomePage', () => {
  let component: IndTeacherHomePage;
  let fixture: ComponentFixture<IndTeacherHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
