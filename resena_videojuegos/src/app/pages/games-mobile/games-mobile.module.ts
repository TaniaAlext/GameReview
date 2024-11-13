import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesMobilePageRoutingModule } from './games-mobile-routing.module';

import { GamesMobilePage } from './games-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesMobilePageRoutingModule
  ],
  declarations: [GamesMobilePage]
})
export class GamesMobilePageModule {}
