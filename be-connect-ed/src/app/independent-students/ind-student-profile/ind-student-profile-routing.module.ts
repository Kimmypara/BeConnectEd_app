import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentProfilePage } from './ind-student-profile.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentProfilePageRoutingModule {}
