import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cliente',
  templateUrl: './page-cliente.page.html',
  styleUrls: ['./page-cliente.page.scss'],
})
export class PageClientePage implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  logout() {
    this.router.navigate(['/login-cliente']);
  }
}
