import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherCalendarPageRoutingModule } from './teacher-calendar-routing.module';

import { TeacherCalendarPage } from './teacher-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherCalendarPageRoutingModule
  ],
  declarations: [TeacherCalendarPage]
})
export class TeacherCalendarPageModule {}
