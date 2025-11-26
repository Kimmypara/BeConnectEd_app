import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyUnitsPage } from './my-units.page';

const routes: Routes = [
  {
    path: '',
    component: MyUnitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyUnitsPageRoutingModule {}
