import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndependentRegistrationPage } from './independent-registration.page';

const routes: Routes = [
  {
    path: '',
    component: IndependentRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndependentRegistrationPageRoutingModule {}
