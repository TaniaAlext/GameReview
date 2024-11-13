import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgService } from '../services/rawg.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  juego: any;
  generos: string = '';
  screenshots: any[] = [];

  constructor(private route: ActivatedRoute, private rawgService: RawgService) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');

    if (gameId) {
      this.rawgService.getGameDetails(gameId).subscribe(
        (data: any) => {
          this.juego = data;
          // Procesar los géneros
          if (this.juego?.genres) {
            this.generos = this.juego.genres.map((g: any) => g.name).join(', ');
          }
        },
        (error: any) => {
          console.error('Error al obtener los detalles del juego:', error);
        }
      );
      this.rawgService.getGameScreenshots(gameId).subscribe(
        (data: any) => {
          this.screenshots = data.results;  // Asigna las capturas de pantalla a la variable
        },
        (error: any) => {
          console.error('Error al obtener las capturas de pantalla:', error);
        }
      );
    }
    
  }
}
