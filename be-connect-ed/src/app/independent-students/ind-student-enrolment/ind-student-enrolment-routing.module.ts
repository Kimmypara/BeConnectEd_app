import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentEnrolmentPage } from './ind-student-enrolment.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentEnrolmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentEnrolmentPageRoutingModule {}
