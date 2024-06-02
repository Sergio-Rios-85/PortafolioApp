import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageUsuarioPageRoutingModule } from './page-usuario-routing.module';

import { PageUsuarioPage } from './page-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageUsuarioPageRoutingModule
  ],
  declarations: [PageUsuarioPage]
})
export class PageUsuarioPageModule {}
