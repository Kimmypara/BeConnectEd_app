import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrolmentPage } from './enrolment.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolmentPageRoutingModule {}
