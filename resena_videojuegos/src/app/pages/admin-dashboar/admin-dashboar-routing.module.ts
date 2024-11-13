import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboarPage } from './admin-dashboar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboarPageRoutingModule {}
