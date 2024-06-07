import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  RUT_CLIENTE!: string;
  NOMBRES_CLIENTE!: string;
  AP_PATERNO_CLIENTE!: string;
  AP_MATERNO_CLIENTE!: string;
  TELEFONO_FIJO!: string;
  CELULAR_CLIENTE!: string;
  CORREO_CLIENTE!: string;
  DIRECCION_CLIENTE!: string;
  CONTRASENA!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  registro() {
    if (!this.validarDatos()) {
      alert('Por favor, ingrese datos válidos.');
      return;
    }

    const data = {
      RUT_CLIENTE: this.RUT_CLIENTE,
      NOMBRES_CLIENTE: this.NOMBRES_CLIENTE,
      AP_PATERNO_CLIENTE: this.AP_PATERNO_CLIENTE,
      AP_MATERNO_CLIENTE: this.AP_MATERNO_CLIENTE,
      TELEFONO_FIJO: this.TELEFONO_FIJO,
      CELULAR_CLIENTE: this.CELULAR_CLIENTE,
      CORREO_CLIENTE: this.CORREO_CLIENTE,
      DIRECCION_CLIENTE: this.DIRECCION_CLIENTE,
      CONTRASENA: this.CONTRASENA,
    };

    this.http.post<any>('http://localhost:4000/registro', data).subscribe(
      (response) => {
        alert(response.message);
        if (response.message === 'Registro exitoso') {
          this.router.navigate(['/login-cliente']);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error en el servidor');
      }
    );
  }

  validarDatos(): boolean {
    const regexNumeros = /^[0-9]+$/;
    return regexNumeros.test(this.TELEFONO_FIJO) && regexNumeros.test(this.CELULAR_CLIENTE);
  }

  logout() {
    this.router.navigate(['/cliente']);
  }
}
