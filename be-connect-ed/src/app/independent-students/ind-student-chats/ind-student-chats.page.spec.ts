import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndStudentChatsPage } from './ind-student-chats.page';

describe('IndStudentChatsPage', () => {
  let component: IndStudentChatsPage;
  let fixture: ComponentFixture<IndStudentChatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStudentChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
