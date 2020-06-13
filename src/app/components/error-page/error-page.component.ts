import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  pageTitle: string;
  pageSubTitle: string;
  message: string;

  constructor() {
    this.pageTitle = 'Página no encontrada';
    this.pageSubTitle = '404';
    this.message = 'Lo sentimos :( la página a la que intentas acceder no esta disponible';
  }

  ngOnInit() {
  }

}
