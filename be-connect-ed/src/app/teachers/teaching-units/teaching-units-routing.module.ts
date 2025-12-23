import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachingUnitsPage } from './teaching-units.page';

const routes: Routes = [
  {
    path: '',
    component: TeachingUnitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachingUnitsPageRoutingModule {}
