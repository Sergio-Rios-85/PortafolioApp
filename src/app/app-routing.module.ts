import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./pages/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'page-cliente',
    loadChildren: () => import('./pages/page-cliente/page-cliente.module').then( m => m.PageClientePageModule)
  },
  {
    path: 'page-usuario',
    loadChildren: () => import('./pages/page-usuario/page-usuario.module').then( m => m.PageUsuarioPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./pages/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'busqueda-veh-cliente',
    loadChildren: () => import('./pages/busqueda-veh-cliente/busqueda-veh-cliente.module').then( m => m.BusquedaVehClientePageModule)
  },
  {
    path: 'inspeccion',
    loadChildren: () => import('./pages/inspeccion/inspeccion.module').then( m => m.InspeccionPageModule)
  },
  {
    path: 'olvidar-contrasena',
    loadChildren: () => import('./pages/olvidar-contrasena/olvidar-contrasena.module').then( m => m.OlvidarContrasenaPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./pages/reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
