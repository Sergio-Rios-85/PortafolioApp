import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-veh-cliente',
  templateUrl: './busqueda-veh-cliente.page.html',
  styleUrls: ['./busqueda-veh-cliente.page.scss'],
})
export class BusquedaVehClientePage implements OnInit {

  PATENTE: string = '';
  MOTOR: string = '';
  CHASIS: string = '';
  vehiculos: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  buscarVehiculos() {
    const filtros = {
      PATENTE: this.PATENTE,
      MOTOR: this.MOTOR,
      CHASIS: this.CHASIS
    };

    this.http.post<any[]>('http://localhost:4000/buscar-vehiculos', filtros).subscribe(
      data => {
        this.vehiculos = data;
      },
      error => {
        console.error('Error al buscar vehículos:', error);
        alert('Error al buscar vehículos');
      }
    );
  }

  logout() {
    this.router.navigate(['/login-cliente']);
  }
}
