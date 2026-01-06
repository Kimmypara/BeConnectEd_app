import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherProfilePage } from './ind-teacher-profile.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherProfilePageRoutingModule {}
