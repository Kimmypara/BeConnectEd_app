import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherHomePage } from './ind-teacher-home.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherHomePageRoutingModule {}
