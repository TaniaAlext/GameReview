import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3000'; // Cambia esta URL si tu backend está en otro puerto o dominio

  constructor(private http: HttpClient) {}

  // Método para el login
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  // Ejemplo: Obtener videojuegos
  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}/games`);
  }
    // Método para obtener categorías
    getCategories(): Observable<any> {
      return this.http.get(`${this.baseUrl}/categories`);
    }
  
    // Método para obtener reseñas
    getReviews(): Observable<any> {
      return this.http.get(`${this.baseUrl}/reviews`);
    }

  }