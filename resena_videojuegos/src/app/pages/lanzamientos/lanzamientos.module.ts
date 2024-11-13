import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanzamientosPageRoutingModule } from './lanzamientos-routing.module';

import { LanzamientosPage } from './lanzamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanzamientosPageRoutingModule
  ],
  declarations: [LanzamientosPage]
})
export class LanzamientosPageModule {}
