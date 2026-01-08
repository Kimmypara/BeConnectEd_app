import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentCalendarPage } from './ind-student-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentCalendarPageRoutingModule {}
