import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentCoursePageRoutingModule } from './ind-student-course-routing.module';

import { IndStudentCoursePage } from './ind-student-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentCoursePageRoutingModule
  ],
  declarations: [IndStudentCoursePage]
})
export class IndStudentCoursePageModule {}
