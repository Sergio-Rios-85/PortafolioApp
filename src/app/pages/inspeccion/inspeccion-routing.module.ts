import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspeccionPage } from './inspeccion.page';

const routes: Routes = [
  {
    path: '',
    component: InspeccionPage
  },  {
    path: 'oi',
    loadChildren: () => import('./oi/oi.module').then( m => m.OiPageModule)
  },
  {
    path: 'documento',
    loadChildren: () => import('./documento/documento.module').then( m => m.DocumentoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspeccionPageRoutingModule {}
