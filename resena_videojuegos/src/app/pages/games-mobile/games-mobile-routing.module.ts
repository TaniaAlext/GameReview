import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesMobilePage } from './games-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: GamesMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesMobilePageRoutingModule {}
