import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-games-mobile',
  templateUrl: './games-mobile.page.html',
  styleUrls: ['./games-mobile.page.scss'],
})
export class GamesMobilePage implements OnInit {
  juegosMobiles: any[] = [];

  constructor(private rawgService: RawgService, private toastController: ToastController) { }

  ngOnInit() {
    this.getJuegosMobiles();
  }

  getJuegosMobiles() {
    this.rawgService.getMobileGames().subscribe(
      (data) => {
        if (data && data.results && Array.isArray(data.results)) {
          this.juegosMobiles = data.results;
        } else {
          console.error('Formato de datos inesperado:', data);
        }
      },
      (error) => {
        console.error('Error al obtener los juegos móviles:', error);
      }
    );
  }

  async notificarJuego(gameName: string) {
    const toast = await this.toastController.create({
      message: `Notificación activada para el juego: ${gameName}`,
      duration: 2000,
      color: 'primary'
    });

    await toast.present();
  } 
}
