import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherUnitPage } from './ind-teacher-unit.page';

describe('IndTeacherUnitPage', () => {
  let component: IndTeacherUnitPage;
  let fixture: ComponentFixture<IndTeacherUnitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherUnitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
