import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndTeacherChatsPage } from './ind-teacher-chats.page';

describe('IndTeacherChatsPage', () => {
  let component: IndTeacherChatsPage;
  let fixture: ComponentFixture<IndTeacherChatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTeacherChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
