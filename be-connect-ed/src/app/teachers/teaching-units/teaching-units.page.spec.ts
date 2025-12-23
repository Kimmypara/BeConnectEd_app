import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeachingUnitsPage } from './teaching-units.page';

describe('TeachingUnitsPage', () => {
  let component: TeachingUnitsPage;
  let fixture: ComponentFixture<TeachingUnitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingUnitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
