import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentHomePage } from './ind-student-home.page';

describe('IndStudentHomePage', () => {
  let component: IndStudentHomePage;
  let fixture: ComponentFixture<IndStudentHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
