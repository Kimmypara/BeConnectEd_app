import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentHomePage } from './ind-student-home.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentHomePageRoutingModule {}
