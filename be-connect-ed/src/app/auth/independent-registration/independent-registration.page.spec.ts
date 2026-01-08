import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndependentRegistrationPage } from './independent-registration.page';

describe('IndependentRegistrationPage', () => {
  let component: IndependentRegistrationPage;
  let fixture: ComponentFixture<IndependentRegistrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
