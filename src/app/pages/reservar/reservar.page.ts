import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TimeSlot {
  HORA: string;
  BOOKED: boolean;
}

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  regiones: any[] = [];
  sucursales: any[] = [];
  availableTimes: TimeSlot[] = [];
  patentes: any[] = [];

  selectedRegion!: number;
  selectedSucursal!: number;
  selectedDate!: string;
  selectedTimeSlot!: TimeSlot;
  selectedPatente!: string;
  selectedMarca!: string;
  selectedModelo!: string;
  selectedAnio!: number;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadRegiones();
    this.cargarDatos();
  }

  loadRegiones() {
    this.http.get<any[]>('http://localhost:4000/regiones').subscribe(data => {
      this.regiones = data;
    });
  }

  loadSucursales() {
    if (this.selectedRegion) {
      this.http.get<any[]>(`http://localhost:4000/sucursales/${this.selectedRegion}`).subscribe(data => {
        this.sucursales = data;
      }, error => {
        console.error('Error al cargar sucursales:', error);
      });
    }
  }

  loadAvailableTimes() {
    if (this.selectedDate) {
      const formattedDate = new Date(this.selectedDate).toISOString().split('T')[0];
      this.http.get<TimeSlot[]>(`http://localhost:4000/available-times?date=${formattedDate}`).subscribe(data => {
        this.availableTimes = data;
      }, error => {
        console.error('Error al cargar horarios disponibles:', error);
      });
    }
  }

  selectTime(time: TimeSlot) {
    this.selectedTimeSlot = time;
  }

  cargarDatos() {
    this.http.get<any[]>('http://localhost:4000/patentes').subscribe(data => {
      this.patentes = data;
    });
  }

  loadVehicleData() {
    this.http.get<any>(`http://localhost:4000/vehiculo/${this.selectedPatente}`).subscribe(data => {
      this.selectedMarca = data.MARCA;
      this.selectedModelo = data.MODELO;
      this.selectedAnio = data.ANIO;
    }, error => {
      console.error('Error al cargar datos del vehículo:', error);
    });
  }

  reservar() {
    if (!this.selectedPatente || !this.selectedMarca || !this.selectedModelo || !this.selectedAnio || !this.selectedTimeSlot) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    const reservation = {
      FECHA: this.selectedDate,
      SUCURSAL: this.selectedSucursal,
      HORA: this.selectedTimeSlot.HORA,
      RE_PATENTE: this.selectedPatente,
      RE_MARCA: this.selectedMarca,
      RE_MODELO: this.selectedModelo,
      RE_ANIO: this.selectedAnio
    };

    this.http.post('http://localhost:4000/reservar', reservation).subscribe(
      response => {
        alert('Reserva exitosa');
        this.router.navigate(['/page-usuario']);
      },
      error => {
        alert('Error al realizar la reserva');
      }
    );
  }

  logout() {
    this.router.navigate(['/page-usuario']);
  }
}
