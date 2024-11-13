import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';  // Asegúrate de tener este servicio

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  rankings: any[] = [];
  loading: boolean = true;  // Variable para controlar el estado de carga

  constructor(private rawgService: RawgService) {}

  ngOnInit() {
    this.fetchTopRatedGames();
  }

  fetchTopRatedGames() {
    this.rawgService.getTopRatedGames().subscribe(
      (data) => {
        this.rankings = data.results.map((game: any) => ({
          id: game.id,
          titulo: game.name || 'Sin título disponible',  // Validamos si existe un título
          plataforma: game.platforms?.map((p: any) => p.platform.name).join(', ') || null,  // Eliminamos el 'N/A' si no es necesario
          background_image: game.background_image || 'assets/default-image.jpg',  // Imagen por defecto si no hay
          rating: game.rating || 'No disponible',  // Mostrar 'No disponible' si no hay calificación
          description_raw: game.description_raw || 'PROCESO',
        }));
        this.loading = false;  // Se desactiva el estado de carga
      },
      (error) => {
        console.error('Error al obtener los juegos:', error);
        this.loading = false;  // Asegurarse de detener el spinner si hay un error
      }
    );
  }
}
