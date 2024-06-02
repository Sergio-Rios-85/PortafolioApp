import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BusquedaVehClientePage } from './pages/busqueda-veh-cliente/busqueda-veh-cliente.page';

const routes: Routes = [
  { path: 'busqueda-veh-cliente', component: BusquedaVehClientePage },
  // otras rutas
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
