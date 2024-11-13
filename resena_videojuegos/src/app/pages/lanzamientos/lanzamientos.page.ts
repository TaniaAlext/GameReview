import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';
import { ToastController } from '@ionic/angular';  // Importa ToastController para mostrar notificaciones

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.page.html',
  styleUrls: ['./lanzamientos.page.scss'],
})
export class LanzamientosPage implements OnInit {

  proximosLanzamientos: any[] = [];  // Aquí almacenaremos los próximos lanzamientos

  constructor(private rawgService: RawgService, private toastController: ToastController) { }

  ngOnInit() {
    this.getProximosLanzamientos();  // Llama a la API cuando el componente se inicializa
  }

  // Llama al servicio para obtener los próximos lanzamientos
  getProximosLanzamientos() {
    this.rawgService.getUpcomingGames().subscribe((data) => {
      this.proximosLanzamientos = data.results;  // Aquí asignamos los juegos a la variable
      console.log(this.proximosLanzamientos);  // Para verificar los datos en la consola
    }, (error) => {
      console.error('Error al obtener los próximos lanzamientos:', error);
    });
  }

  // Función para manejar la notificación de un juego
  async notificarJuego(gameName: string) {
    const toast = await this.toastController.create({
      message: `Notificación activada para el juego: ${gameName}`,
      duration: 2000,
      color: 'primary'
    });
    await toast.present();
    console.log(`Notificación activada para el juego: ${gameName}`);  // Solo para verificar
  }
}
