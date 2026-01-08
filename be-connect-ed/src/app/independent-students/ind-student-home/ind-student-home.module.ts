import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentHomePageRoutingModule } from './ind-student-home-routing.module';

import { IndStudentHomePage } from './ind-student-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentHomePageRoutingModule
  ],
  declarations: [IndStudentHomePage]
})
export class IndStudentHomePageModule {}
