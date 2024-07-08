import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  correo!: string;
  contrasena!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const data = {
      correo: this.correo,
      contrasena: this.contrasena,
    };

    this.http.post<any>('http://localhost:4000/login-cliente', data).subscribe(
      (response) => {
        alert(response.message);
        if (response.message === 'Inicio de sesión exitoso') {
          localStorage.setItem('clienteId', response.clienteId);
          this.router.navigate(['/page-cliente']);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Credenciales incorrectas');
      }
    );
  }

  logout() {
    this.router.navigate(['/cliente']);
  }
}
