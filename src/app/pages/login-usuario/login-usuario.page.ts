import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {

    usuario!: string;
    contrasena!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    // Agregar console.log para imprimir los valores de usuario y contraseña
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);
  
    const data = {
      usuario: this.usuario,
      contrasena: this.contrasena,
    };
  
    this.http.post<any>('http://localhost:4000/login-usuario', data).subscribe(
      (response) => {
        alert(response.message);
        if (response.message === 'Inicio de sesión exitoso') {
          localStorage.setItem('usuarioId', response.usuarioId);
          this.router.navigate(['/page-usuario']); 
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error en el servidor');
      }
    );
  }
  

  logout() {
    this.router.navigate(['/principal']);
  }

}
