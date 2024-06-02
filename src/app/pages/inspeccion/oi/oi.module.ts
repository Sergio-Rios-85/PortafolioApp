import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OiPageRoutingModule } from './oi-routing.module';

import { OiPage } from './oi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OiPageRoutingModule
  ],
  declarations: [OiPage]
})
export class OiPageModule {}
