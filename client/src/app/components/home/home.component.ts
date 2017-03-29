import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: '../../views/home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    console.log('home.componet está cargado')
  }

}
