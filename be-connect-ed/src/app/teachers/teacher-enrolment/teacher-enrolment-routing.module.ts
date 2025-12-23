import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherEnrolmentPage } from './teacher-enrolment.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherEnrolmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherEnrolmentPageRoutingModule {}
