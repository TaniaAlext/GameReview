import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string | undefined;
  password: string | undefined;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    const credentials = { username: this.username, password: this.password };
    this.adminService.login(credentials).subscribe(
      async (response: any) => {
        if (response && response.success) {
          // Redirige usando la ruta especificada por el backend o por defecto a /admin-dashboard
          this.router.navigate([response.redirect || '/admin-dashboar']);
        } else {
          await this.showAlert('Error', 'Credenciales incorrectas.');
        }
      },
      async (error) => {
        await this.showAlert('Error', 'Ocurrió un error al intentar iniciar sesión.');
        console.error('Error al hacer login:', error);
      }
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
