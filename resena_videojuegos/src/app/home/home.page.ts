import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importar AlertController para mostrar alertas

interface Banner {
  image: string;
  title: string;
  subtitle: string;
}

interface UpcomingGame {
  image: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banners: Banner[] = [
    {
      image: 'assets/img/banner/banner_amanda_the_adventure_2.jpg',
      title: 'Amanda the Adventure 2',
      subtitle: 'Dora la exploradora pero NIGGA',
    },
    {
      image: 'assets/img/banner/banner-epic_mickey_rebrushed.jpg',
      title: 'Epic Mickey - Rebrushed',
      subtitle: '¡HORA DE TINTAR!',
    },
    {
      image: 'assets/img/banner/banner_stalker2.jpg',
      title: 'STALKER 2',
      subtitle: 'Watch Dog pero chingon',
    },
    {
      image: 'assets/img/banner/banner_warhammer.jpg',
      title: 'Warhammer 40,000',
      subtitle: 'Que se arme los v3rgazos',
    },
    {
      image: 'assets/img/banner/banner_indiana_jones2_and_the_great_circle.jpg',
      title: 'Indian Jones 2 & The Great Circle',
      subtitle: 'Tesoro mi pack!!!',
    },
    // Resto de banners...
  ];

  upcomingGames: UpcomingGame[] = [
    {
      image: 'assets/img/lanzamientos/Dragon Quest 3 HD-2D Remake.jpg',
      title: 'Dragon Quest 3 HD-2D Remake',
    },
    {
      image: 'assets/img/lanzamientos/LEGO Horizon - Adventures.jpg',
      title: 'LEGO Horizon - Adventures',
    },
    {
      image: 'assets/img/lanzamientos/MySims - Colección Sofá y Mantita.jpg',
      title: 'Colección Sofá & Mantita',
    },
    {
      image: 'assets/img/lanzamientos/STALKER 2.jpg',
      title: 'STALKER 2',
    },
  ];

  constructor(private alertController: AlertController) {}

  // Mantener la función de navegación
  navigateTo(url: string): void {
    window.location.href = url;
  }

  // Agregar la función de notificación para los juegos próximos
  async notifyGame(gameTitle: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Notificación',
      message: `Te notificaremos cuando ${gameTitle} esté disponible.`,
      buttons: ['OK'],
    });

    await alert.present(); // Mostrar la alerta
  }
}
