import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IndependentRegistrationPageRoutingModule } from './independent-registration-routing.module';

import { IndependentRegistrationPage } from './independent-registration.page';

@NgModule({
  imports: [
 CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    IonicModule,
    IndependentRegistrationPageRoutingModule

  ],
  declarations: [IndependentRegistrationPage]
})
export class IndependentRegistrationPageModule {}
