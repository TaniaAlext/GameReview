import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RawgService } from '../../services/rawg.service';
import { GamesDBService } from '@app/services/games-db.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
})
export class ResenasPage implements OnInit {
  resenas: any[] = [];
  games: any[] = [];

  constructor(private rawgService: RawgService, private router: Router, private gamesDBService: GamesDBService) {}

  ngOnInit() {
    this.rawgService.getGames().subscribe(
      (data) => {
        this.resenas = data.results.map((game: any) => ({
          id: game.id,
          titulo: game.name,
          subtitulo: game.genres.map((genre: any) => genre.name).join(', '),
          imagen: game.background_image,
          contenido: game.released ? `Fecha de lanzamiento: ${game.released}` : 'Fecha de lanzamiento no disponible',
        }));
      },
      (error) => {
        console.error('Error al obtener los juegos:', error);
      }
    );
    this.loadGames();

    
  }
  loadGames() {
    this.gamesDBService.getGamesDB().subscribe((data) => {
      this.games = data;
      console.log(this.games);
    });
  
  }
  verResena(id: number) {
    // Navega a la página de detalles pasando el ID del juego
    this.router.navigate(['/detalles', id]);
  }
}
