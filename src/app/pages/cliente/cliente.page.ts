import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import validator from 'validator';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  contacto = {
    nombre: '',
    correo: '',
    mensaje: ''
  };
  emailInvalid: boolean = false;

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) { }

  ngOnInit() {}

  async enviarContacto() {
    if (!this.validarCorreo(this.contacto.correo)) {
      this.emailInvalid = true;
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingrese un correo electrónico válido.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    this.emailInvalid = false;

    try {
      const response = await this.http.post('http://localhost:4000/contacto', this.contacto).toPromise();
      const alert = await this.alertController.create({
        header: 'Contacto enviado',
        message: 'Su mensaje ha sido enviado exitosamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.contacto = { nombre: '', correo: '', mensaje: '' };
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un error al enviar el mensaje.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  validarCorreo(correo: string): boolean {
    return validator.isEmail(correo);
  }

  logout() {
    this.router.navigate(['/principal']);
  }
}
