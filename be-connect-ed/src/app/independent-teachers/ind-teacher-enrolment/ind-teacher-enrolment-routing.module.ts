import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherEnrolmentPage } from './ind-teacher-enrolment.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherEnrolmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherEnrolmentPageRoutingModule {}
