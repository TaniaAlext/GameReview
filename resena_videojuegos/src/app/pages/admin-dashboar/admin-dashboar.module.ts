import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboarPageRoutingModule } from './admin-dashboar-routing.module';

import { AdminDashboarPage } from './admin-dashboar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboarPageRoutingModule
  ],
  declarations: [AdminDashboarPage]
})
export class AdminDashboarPageModule {}
