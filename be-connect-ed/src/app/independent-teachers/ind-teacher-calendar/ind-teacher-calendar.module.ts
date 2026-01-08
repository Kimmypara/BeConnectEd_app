import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherCalendarPageRoutingModule } from './ind-teacher-calendar-routing.module';

import { IndTeacherCalendarPage } from './ind-teacher-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherCalendarPageRoutingModule
  ],
  declarations: [IndTeacherCalendarPage]
})
export class IndTeacherCalendarPageModule {}
