import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherNotificationsPageRoutingModule } from './teacher-notifications-routing.module';

import { TeacherNotificationsPage } from './teacher-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherNotificationsPageRoutingModule
  ],
  declarations: [TeacherNotificationsPage]
})
export class TeacherNotificationsPageModule {}
