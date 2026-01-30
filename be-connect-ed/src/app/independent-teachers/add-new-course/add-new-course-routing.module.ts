import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewCoursePage } from './add-new-course.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewCoursePageRoutingModule {}


