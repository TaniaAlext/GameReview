import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesDBService {

  private apiUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) {}

  getGamesDB(): Observable<any> {
    return this.http.get(`${this.apiUrl}/games`);
  }

  // Crear un nuevo juego
  addGameDB(gameData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/games`, gameData);
  }

}
