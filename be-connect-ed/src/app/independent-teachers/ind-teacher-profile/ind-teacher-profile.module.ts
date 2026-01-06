import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherProfilePageRoutingModule } from './ind-teacher-profile-routing.module';

import { IndTeacherProfilePage } from './ind-teacher-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherProfilePageRoutingModule
  ],
  declarations: [IndTeacherProfilePage]
})
export class IndTeacherProfilePageModule {}
