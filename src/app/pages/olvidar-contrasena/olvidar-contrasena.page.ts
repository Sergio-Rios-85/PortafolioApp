import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidar-contrasena',
  templateUrl: './olvidar-contrasena.page.html',
  styleUrls: ['./olvidar-contrasena.page.scss'],
})
export class OlvidarContrasenaPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const data = { email: this.email, password: this.password };
    this.http.post('http://localhost:4000/api/reset-password', data)
      .subscribe(response => {
        alert('Contraseña restablecida con éxito');
        this.router.navigate(['/login-cliente']);
      }, error => {
        alert('Error al restablecer la contraseña');
      });
  }

  logout() {
    this.router.navigate(['/cliente']);
  }

}
