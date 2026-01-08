import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherNotificationsPageRoutingModule } from './ind-teacher-notifications-routing.module';

import { IndTeacherNotificationsPage } from './ind-teacher-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherNotificationsPageRoutingModule
  ],
  declarations: [IndTeacherNotificationsPage]
})
export class IndTeacherNotificationsPageModule {}
