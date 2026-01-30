import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentMyunitsPage } from './ind-student-myunits.page';

describe('IndStudentMyunitsPage', () => {
  let component: IndStudentMyunitsPage;
  let fixture: ComponentFixture<IndStudentMyunitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentMyunitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
