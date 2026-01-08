import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndStudentCoursePage } from './ind-student-course.page';

const routes: Routes = [
  {
    path: '',
    component: IndStudentCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndStudentCoursePageRoutingModule {}
