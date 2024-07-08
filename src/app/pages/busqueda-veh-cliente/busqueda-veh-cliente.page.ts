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
  errorPatente: boolean = false;
  errorMessage: string = 'Formato de patente incorrecto. Por favor, ingrese una patente válida.';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  validarPatente(patente: string): boolean {
    const regex = /^[A-Z]{4}\d{2}$/;
    return regex.test(patente);
  }

  buscarVehiculos() {
    if (!this.validarPatente(this.PATENTE)) {
      this.errorPatente = true;
      return;
    }
  
    this.errorPatente = false;
  
    const filtros = {
      PATENTE: this.PATENTE,
      MOTOR: this.MOTOR,
      CHASIS: this.CHASIS
    };
  
    this.http.post<any[]>('http://localhost:4000/buscar-vehiculos', filtros).subscribe(
      data => {
        console.log(data); // Verifica los datos recibidos
        this.vehiculos = data;
      },
      error => {
        console.error('Error al buscar vehículos:', error);
        alert('Error al buscar vehículos');
      }
    );
  }
  

  logout() {
    this.router.navigate(['/page-cliente']);
  }
}

