import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgService {
  getUpcomingSteamGames() {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}&platforms=4&dates=2024-01-01,2024-12-31&ordering=-released`);

  }
  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = '196835b7829a45eda3c72baf0869aa1b';  // Reemplaza con tu clave

  constructor(private http: HttpClient) { }

  getTopRatedGames(): Observable<any> {
    const url = `${this.apiUrl}/games?ordering=-rating&page_size=10&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  // Ejemplo de una llamada a la API para obtener juegos
  getGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}`);
  }
  getGameDetails(id: string): Observable<any> {
    const url = `${this.apiUrl}/games/${id}?key=${this.apiKey}`;
    return this.http.get(url);
  }
  getGameScreenshots(gameId: string): Observable<any> {
    const url = `${this.apiUrl}/games/${gameId}/screenshots?key=${this.apiKey}`;
    return this.http.get(url);
  }
  
  getUpcomingGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}&dates=2024-01-01,2024-12-31&ordering=-released`);
  }

  getMobileGames(): Observable<any> {
    const platformIds = '38,79'; // iOS and Android IDs
    return this.http.get(`${this.apiUrl}/games`, {
      params: {
        platforms: platformIds,
        key: this.apiKey,
        page_size: '20' // Adjust the size as needed
      }
    });
  // Otras solicitudes de API pueden añadirse aquí
}}
