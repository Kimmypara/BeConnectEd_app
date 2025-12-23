import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherChatsPage } from './teacher-chats.page';

describe('TeacherChatsPage', () => {
  let component: TeacherChatsPage;
  let fixture: ComponentFixture<TeacherChatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
