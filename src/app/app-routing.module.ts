import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'cliente', loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClientePageModule) },
  { path: 'login-cliente', loadChildren: () => import('./pages/login-cliente/login-cliente.module').then(m => m.LoginClientePageModule) },
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'page-cliente', loadChildren: () => import('./pages/page-cliente/page-cliente.module').then(m => m.PageClientePageModule) },
  { path: 'page-usuario', loadChildren: () => import('./pages/page-usuario/page-usuario.module').then(m => m.PageUsuarioPageModule) },
  { path: 'login-usuario', loadChildren: () => import('./pages/login-usuario/login-usuario.module').then(m => m.LoginUsuarioPageModule) },
  { path: 'vehiculo', loadChildren: () => import('./pages/vehiculo/vehiculo.module').then(m => m.VehiculoPageModule) },
  { path: 'busqueda-veh-cliente', loadChildren: () => import('./pages/busqueda-veh-cliente/busqueda-veh-cliente.module').then(m => m.BusquedaVehClientePageModule) },
  { path: 'inspeccion', loadChildren: () => import('./pages/inspeccion/inspeccion.module').then(m => m.InspeccionPageModule) },
  { path: 'inspeccion/documento', loadChildren: () => import('./pages/inspeccion/documento/documento.module').then(m => m.DocumentoPageModule) },
  { path: 'inspeccion/oi', loadChildren: () => import('./pages/inspeccion/oi/oi.module').then(m => m.OiPageModule) },
  { path: 'reservar', loadChildren: () => import('./pages/reservar/reservar.module').then(m => m.ReservarPageModule) },
  { path: 'principal', loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule) },
  { path: 'olvidar-contrasena', loadChildren: () => import('./pages/olvidar-contrasena/olvidar-contrasena.module').then(m => m.OlvidarContrasenaPageModule) },
  { path: 'e404', loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule) },
  { path: '**', redirectTo: 'e404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
