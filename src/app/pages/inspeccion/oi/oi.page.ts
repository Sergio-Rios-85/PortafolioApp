import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-oi',
  templateUrl: './oi.page.html',
  styleUrls: ['./oi.page.scss'],
})
export class OiPage implements OnInit {
  FECHA!: string;
  HORA!: string;
  ID_VEHICULO!: number;
  ID_TRANSMISION!: number;
  ID_COMBUSTIBLE!: number;
  ID_RESULTADO_INSPECCION!: number;
  ID_PIEZA_ROTA!: number;
  ID_TIPO_DANIO!: number;
  ID_GRAVEDAD_DANIO!: number;
  OBSERVACION!: string;

  patentes: any[] = [];
  transmisions: any[] = [];
  combustibles: any[] = [];
  resultados: any[] = [];
  pieza_rotas: any[] = [];
  tipo_danios: any[] = [];
  gravedad_danios: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.cargarDatos();
  }

  
  cargarDatos() {
    this.http.get<any[]>('http://localhost:4000/patentes').subscribe(
      data => { this.patentes = data; },
      error => { console.error('Error al cargar patentes', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/transmisions').subscribe(
      data => { this.transmisions = data; },
      error => { console.error('Error al cargar transmisiones', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/combustibles').subscribe(
      data => { this.combustibles = data; },
      error => { console.error('Error al cargar combustibles', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/resultados').subscribe(
      data => { this.resultados = data; },
      error => { console.error('Error al cargar resultados', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/pieza_rotas').subscribe(
      data => { this.pieza_rotas = data; },
      error => { console.error('Error al cargar piezas rotas', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/tipo_danios').subscribe(
      data => { this.tipo_danios = data; },
      error => { console.error('Error al cargar tipos de daño', error); }
    );
  
    this.http.get<any[]>('http://localhost:4000/gravedad_danios').subscribe(
      data => { this.gravedad_danios = data; },
      error => { console.error('Error al cargar gravedad de daños', error); }
    );
  }
  

  guardarInspeccion() {
    // Validaciones
    if (!this.FECHA || !this.HORA || this.ID_VEHICULO == null || this.ID_TRANSMISION == null || this.ID_COMBUSTIBLE == null || this.ID_RESULTADO_INSPECCION == null || this.ID_PIEZA_ROTA == null || this.ID_TIPO_DANIO == null || this.ID_GRAVEDAD_DANIO == null || !this.OBSERVACION) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    const inspeccion = {
      FECHA: this.FECHA,
      HORA: this.HORA,
      INSP_PATENTE: this.ID_VEHICULO,
      INSP_TRANSMISION: this.ID_TRANSMISION,
      INSP_COMBUSTIBLE: this.ID_COMBUSTIBLE,
      INSP_RESULTADO_INSPECCION: this.ID_RESULTADO_INSPECCION,
      INSP_PIEZA_ROTA: this.ID_PIEZA_ROTA,
      INSP_TIPO_DANIO: this.ID_TIPO_DANIO,
      INSP_GRAVEDAD_DANIO: this.ID_GRAVEDAD_DANIO,
      OBSERVACION: this.OBSERVACION,
    };

    this.http.post<any>('http://localhost:4000/oi', inspeccion).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.message === 'Inspección registrada con éxito') {
          alert('Inspección registrada con éxito');
          this.router.navigate(['/inspeccion']);
        } else {
          alert('Error al registrar la inspección');
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error en el servidor');
      }
    );
  }

  // Nueva función para generar el PDF
generarPDF() {
  const inspeccion = {
    FECHA: this.FECHA,
    HORA: this.HORA,
    INSP_PATENTE: this.ID_VEHICULO,
    INSP_TRANSMISION: this.ID_TRANSMISION,
    INSP_COMBUSTIBLE: this.ID_COMBUSTIBLE,
    INSP_RESULTADO_INSPECCION: this.ID_RESULTADO_INSPECCION,
    INSP_PIEZA_ROTA: this.ID_PIEZA_ROTA,
    INSP_TIPO_DANIO: this.ID_TIPO_DANIO,
    INSP_GRAVEDAD_DANIO: this.ID_GRAVEDAD_DANIO,
    OBSERVACION: this.OBSERVACION,
  };

  this.http.post('http://localhost:4000/generate-pdf', inspeccion, { responseType: 'blob' }).subscribe(
    (response) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      saveAs(blob, `Inspeccion_${this.FECHA}_${this.HORA}.pdf`);
    },
    (error) => {
      console.error('Error al generar el PDF', error);
    }
  );
}

  logout() {
    this.router.navigate(['/inspeccion']);
  }
}

