import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherChatsPage } from './teacher-chats.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherChatsPageRoutingModule {}
