import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentMyunitsPage } from './ind-student-myunits.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentMyunitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentMyunitsPageRoutingModule {}
