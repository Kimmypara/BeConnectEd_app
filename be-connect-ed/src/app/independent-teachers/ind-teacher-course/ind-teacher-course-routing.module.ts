import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndTeacherCoursePage } from './ind-teacher-course.page';

const routes: Routes = [
  {
    path: '',
    component: IndTeacherCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndTeacherCoursePageRoutingModule {}
