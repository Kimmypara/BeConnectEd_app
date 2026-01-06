import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherUnitPage } from './ind-teacher-unit.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherUnitPageRoutingModule {}
