import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normas-juego',
  templateUrl: './normas-juego.component.html'
})
export class NormasJuegoComponent implements OnInit {
  titulo: string = 'titulo componente'

  constructor() { }

  ngOnInit() {
    console.log('hole')
  }

}
