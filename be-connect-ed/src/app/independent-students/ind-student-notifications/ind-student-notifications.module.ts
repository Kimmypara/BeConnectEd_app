import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentNotificationsPageRoutingModule } from './ind-student-notifications-routing.module';

import { IndStudentNotificationsPage } from './ind-student-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentNotificationsPageRoutingModule
  ],
  declarations: [IndStudentNotificationsPage]
})
export class IndStudentNotificationsPageModule {}
