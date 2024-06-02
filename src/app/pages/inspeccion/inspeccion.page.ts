import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.page.html',
  styleUrls: ['./inspeccion.page.scss'],
})
export class InspeccionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {  
    this.router.navigate(['/page-usuario']);
  }

}
