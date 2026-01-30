import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentMyunitsPageRoutingModule } from './ind-student-myunits-routing.module';

import { IndStudentMyunitsPage } from './ind-student-myunits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentMyunitsPageRoutingModule
  ],
  declarations: [IndStudentMyunitsPage]
})
export class IndStudentMyunitsPageModule {}
