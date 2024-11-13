import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Importar GoogleMapsModule
import { GoogleMapsModule } from '@angular/google-maps';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    GoogleMapsModule, // Asegúrate de agregar este módulo aquí
    HttpClientModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AdminService // Coloca AdminService en providers en vez de imports
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
