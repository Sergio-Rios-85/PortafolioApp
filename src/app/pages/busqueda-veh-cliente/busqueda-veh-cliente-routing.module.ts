import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaVehClientePage } from './busqueda-veh-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaVehClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaVehClientePageRoutingModule {}
