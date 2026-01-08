import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentEnrolmentPageRoutingModule } from './ind-student-enrolment-routing.module';

import { IndStudentEnrolmentPage } from './ind-student-enrolment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentEnrolmentPageRoutingModule
  ],
  declarations: [IndStudentEnrolmentPage]
})
export class IndStudentEnrolmentPageModule {}
