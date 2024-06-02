import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaVehClientePageRoutingModule } from './busqueda-veh-cliente-routing.module';

import { BusquedaVehClientePage } from './busqueda-veh-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaVehClientePageRoutingModule
  ],
  declarations: [BusquedaVehClientePage]
})
export class BusquedaVehClientePageModule {}
