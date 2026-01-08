import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherChatsPage } from './ind-teacher-chats.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherChatsPageRoutingModule {}
