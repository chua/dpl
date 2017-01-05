import { Component,
         OnInit } from '@angular/core';

import { AtestadoService } from './_modelos/atestado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app works!';
  requeridos = '';

  constructor (public attService: AtestadoService) {}

  ngOnInit(): void {

  }

  public adddil () {
    this.attService.añadirCampo('uno');

}

}


