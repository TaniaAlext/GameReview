import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboar',
  templateUrl: './admin-dashboar.page.html',
  styleUrls: ['./admin-dashboar.page.scss'],
})
export class AdminDashboarPage implements OnInit {
  games: any[] = [];
  categories: any[] = []; // Agrega esta propiedad
  reviews: any[] = []; // Agrega esta propiedad

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getGames().subscribe((data) => (this.games = data));
    this.adminService.getCategories().subscribe((data) => (this.categories = data));
    this.adminService.getReviews().subscribe((data) => (this.reviews = data));
  }
}
