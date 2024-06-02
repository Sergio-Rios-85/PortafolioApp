import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.page.html',
  styleUrls: ['./documento.page.scss'],
})
export class DocumentoPage implements OnInit {
  searchPatente!: string;
  inspecciones: any[] = [];
  inspeccionSeleccionada: any;
  selectedImage: string | ArrayBuffer | null = null;
  imageFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() { }

  buscarInspecciones() {
    this.http.get<any[]>('http://localhost:4000/inspecciones').subscribe(
      data => {
        this.inspecciones = data.filter(inspeccion => {
          const patente = inspeccion.INSP_PATENTE || '';
          return patente.includes(this.searchPatente);
        });
        console.log('Inspecciones encontradas:', this.inspecciones);
      },
      error => {
        console.error('Error al buscar inspecciones', error);
      }
    );
  }

  onInspeccionClick(inspeccion: any) {
    console.log('Item clicked:', inspeccion); // Verificar que el evento click se está disparando
    this.seleccionarInspeccion(inspeccion);
  }

  seleccionarInspeccion(inspeccion: any) {
    this.inspeccionSeleccionada = inspeccion;
    console.log('Inspección seleccionada:', this.inspeccionSeleccionada); // Log para verificar selección
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.imageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = e => this.selectedImage = reader.result;
      reader.readAsDataURL(this.imageFile);
    }
  }

  generarPDF() {
    if (!this.inspeccionSeleccionada) {
      alert('Por favor, seleccione una inspección primero.');
      return;
    }

    console.log('Generando PDF para la inspección:', this.inspeccionSeleccionada); // Log para verificar la generación del PDF

    const formData = new FormData();
    formData.append('inspeccion', JSON.stringify(this.inspeccionSeleccionada));
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    this.http.post('http://localhost:4000/generate-pdf', formData, { responseType: 'blob' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, `Inspeccion_${this.inspeccionSeleccionada.FECHA}_${this.inspeccionSeleccionada.HORA}.pdf`);
        console.log('PDF generado y descargado.');
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
