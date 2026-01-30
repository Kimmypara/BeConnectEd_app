import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewCoursePageRoutingModule } from './add-new-course-routing.module';

import { AddNewCoursePage } from './add-new-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewCoursePageRoutingModule
  ],
  declarations: [AddNewCoursePage]
})
export class AddNewCoursePageModule {}


