import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyUnitsPageRoutingModule } from './my-units-routing.module';

import { MyUnitsPage } from './my-units.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyUnitsPageRoutingModule
  ],
  declarations: [MyUnitsPage]
})
export class MyUnitsPageModule {}
