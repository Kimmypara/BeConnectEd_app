import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherEnrolmentPageRoutingModule } from './ind-teacher-enrolment-routing.module';

import { IndTeacherEnrolmentPage } from './ind-teacher-enrolment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherEnrolmentPageRoutingModule
  ],
  declarations: [IndTeacherEnrolmentPage]
})
export class IndTeacherEnrolmentPageModule {}
