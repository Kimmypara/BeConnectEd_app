import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InstituteRegistrationPageRoutingModule } from './institute-registration-routing.module';

import { InstituteRegistrationPage } from './institute-registration.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InstituteRegistrationPageRoutingModule
  ],
  declarations: [InstituteRegistrationPage]
})
export class InstituteRegistrationPageModule {}
