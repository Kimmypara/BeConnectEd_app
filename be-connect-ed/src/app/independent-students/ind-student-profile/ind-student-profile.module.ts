import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentProfilePageRoutingModule } from './ind-student-profile-routing.module';

import { IndStudentProfilePage } from './ind-student-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentProfilePageRoutingModule
  ],
  declarations: [IndStudentProfilePage]
})
export class IndStudentProfilePageModule {}
