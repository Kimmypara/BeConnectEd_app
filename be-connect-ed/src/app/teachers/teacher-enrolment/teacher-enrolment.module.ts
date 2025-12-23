import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherEnrolmentPageRoutingModule } from './teacher-enrolment-routing.module';

import { TeacherEnrolmentPage } from './teacher-enrolment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherEnrolmentPageRoutingModule
  ],
  declarations: [TeacherEnrolmentPage]
})
export class TeacherEnrolmentPageModule {}
