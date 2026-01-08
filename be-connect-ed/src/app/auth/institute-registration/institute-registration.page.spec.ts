import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstituteRegistrationPage } from './institute-registration.page';

describe('InstituteRegistrationPage', () => {
  let component: InstituteRegistrationPage;
  let fixture: ComponentFixture<InstituteRegistrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
