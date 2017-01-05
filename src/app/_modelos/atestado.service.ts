import { Injectable } from '@angular/core';
import { dataField }  from './data-field';

@Injectable()
export class AtestadoService {

  public expData: dataField[] = [
    {nombre: 'numero_expediente'},
    {nombre: 'instructor'},
    {nombre: 'secretario'}
  ];

  unidades: dataField[] = [];
  implicados: dataField[] =[];


  constructor() { 


  }

  public añadirCampo(nuevoCampo:string) {
    this.expData.push({nombre: nuevoCampo});
  }



}
