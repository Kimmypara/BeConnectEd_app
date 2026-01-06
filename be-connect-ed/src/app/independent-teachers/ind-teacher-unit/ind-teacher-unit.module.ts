import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherUnitPageRoutingModule } from './ind-teacher-unit-routing.module';

import { IndTeacherUnitPage } from './ind-teacher-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherUnitPageRoutingModule
  ],
  declarations: [IndTeacherUnitPage]
})
export class IndTeacherUnitPageModule {}
