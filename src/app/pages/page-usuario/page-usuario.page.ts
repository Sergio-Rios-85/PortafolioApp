import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-usuario',
  templateUrl: './page-usuario.page.html',
  styleUrls: ['./page-usuario.page.scss'],
})
export class PageUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('clienteId');
    this.router.navigate(['/principal']);
  }

}
