import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachingUnitsPageRoutingModule } from './teaching-units-routing.module';

import { TeachingUnitsPage } from './teaching-units.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachingUnitsPageRoutingModule
  ],
  declarations: [TeachingUnitsPage]
})
export class TeachingUnitsPageModule {}
