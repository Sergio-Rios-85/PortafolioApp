import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OiPage } from './oi.page';

const routes: Routes = [
  {
    path: '',
    component: OiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OiPageRoutingModule {}
