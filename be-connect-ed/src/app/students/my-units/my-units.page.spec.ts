import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyUnitsPage } from './my-units.page';

describe('MyUnitsPage', () => {
  let component: MyUnitsPage;
  let fixture: ComponentFixture<MyUnitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUnitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
