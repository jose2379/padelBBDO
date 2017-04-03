import {Routes, RouterModule} from '@angular/router'

import {FormularioInicialComponent} from './componentes/formulario-inicial/formulario-inicial.component'
import {NormasJuegoComponent} from './componentes/normas-juego/normas-juego.component'
// import { InicioComponent } from './inicio.component';
// import { GaleriaComponent } from './galeria.component';
// import { ContactoComponent } from './contacto.component';
// import { DesarrolloComponent } from './desarrollo.component';
// import { DesarrolloComponent } from './componentes/desarrollo.component';

/*const appRoutes: Routes = [
 {
 path: '', component: FormularioInicialComponent
 },
 // {
 //     path: 'galeria', component: GaleriaComponent
 // },
 // {
 //     path: 'contacto', component: ContactoComponent
 // },
 {
 path: 'normas-juego', component: NormasJuegoComponent
 },
 {
 path: '**', component: FormularioInicialComponent
 }
 ]*/
const appRoutes: Routes = [
  {
    path: '', component: NormasJuegoComponent
  },
  // {
  //     path: 'galeria', component: GaleriaComponent
  // },
  // {
  //     path: 'contacto', component: ContactoComponent
  // },
  {
    path: 'normas-juego', component: NormasJuegoComponent
  },
  {
    path: '**', component: NormasJuegoComponent
  }
]

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
