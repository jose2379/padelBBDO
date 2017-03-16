import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['scss/main.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    console.log('arrancado');
  }
}
