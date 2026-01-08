import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentNotificationsPage } from './ind-student-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentNotificationsPageRoutingModule {}
