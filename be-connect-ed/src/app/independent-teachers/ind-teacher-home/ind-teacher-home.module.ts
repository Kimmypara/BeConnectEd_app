import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherHomePageRoutingModule } from './ind-teacher-home-routing.module';

import { IndTeacherHomePage } from './ind-teacher-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherHomePageRoutingModule
  ],
  declarations: [IndTeacherHomePage]
})
export class IndTeacherHomePageModule {}
