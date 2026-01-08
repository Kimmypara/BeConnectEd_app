import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherNotificationsPage } from './ind-teacher-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherNotificationsPageRoutingModule {}
