import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrolmentPageRoutingModule } from './enrolment-routing.module';

import { EnrolmentPage } from './enrolment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrolmentPageRoutingModule
  ],
  declarations: [EnrolmentPage]
})
export class EnrolmentPageModule {}
