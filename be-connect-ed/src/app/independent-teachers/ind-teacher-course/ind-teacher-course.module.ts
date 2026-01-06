import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherCoursePageRoutingModule } from './ind-teacher-course-routing.module';

import { IndTeacherCoursePage } from './ind-teacher-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherCoursePageRoutingModule
  ],
  declarations: [IndTeacherCoursePage]
})
export class IndTeacherCoursePageModule {}
