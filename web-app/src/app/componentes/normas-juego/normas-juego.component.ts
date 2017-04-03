import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-normas-juego',
  templateUrl: '../../vistas/normas-juego.component.html'
})
export class NormasJuegoComponent implements OnInit {
  titulo: string = 'Normas de participación';
  arrContenido: Array<any> = [
    {
      id: 'quien',
      titulo: 'titulo quien',
      descripcion: 'descripción quien'
    },
    {
      id: 'cuando',
      titulo: 'titulo cuando',
      descripcion: 'descripción cuando'
    },
    {
      id: 'donde',
      titulo: 'titulo donde',
      descripcion: 'descripción donde'
    },
    {
      id: 'como',
      titulo: 'titulo como',
      descripcion: 'descripción como'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    console.log('hole', this.arrContenido);
  }

}
