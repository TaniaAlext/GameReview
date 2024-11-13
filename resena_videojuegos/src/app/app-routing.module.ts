import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetallesPage } from './detalles/detalles.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resenas',
    loadChildren: () => import('./pages/resenas/resenas.module').then(m => m.ResenasPageModule)
  },
  {
    path: 'lanzamientos',
    loadChildren: () => import('./pages/lanzamientos/lanzamientos.module').then(m => m.LanzamientosPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then(m => m.DetallesPageModule)
  },
  { 
    path: 'detalles/:id', 
    component: DetallesPage 
  },
  {
    path: 'admin-dashboar',
    loadChildren: () => import('./pages/admin-dashboar/admin-dashboar.module').then(m => m.AdminDashboarPageModule)
  },
  {
    path: 'games-mobile',
    loadChildren: () => import('./pages/games-mobile/games-mobile.module').then(m => m.GamesMobilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }