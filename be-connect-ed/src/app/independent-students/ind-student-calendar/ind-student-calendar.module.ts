import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentCalendarPageRoutingModule } from './ind-student-calendar-routing.module';

import { IndStudentCalendarPage } from './ind-student-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentCalendarPageRoutingModule
  ],
  declarations: [IndStudentCalendarPage]
})
export class IndStudentCalendarPageModule {}
