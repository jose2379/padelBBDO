import { Routes, RouterModule } from '@angular/router'

import { FormularioInicialComponent } from './modulos/formulario-inicial.component'
// import { InicioComponent } from './inicio.component';
// import { GaleriaComponent } from './galeria.component';
// import { ContactoComponent } from './contacto.component';
// import { DesarrolloComponent } from './desarrollo.component';
// import { DesarrolloComponent } from './componentes/desarrollo.component';

const appRoutes: Routes = [
    {
        path: '', component: FormularioInicialComponent
    },
    // {
    //     path: 'galeria', component: GaleriaComponent
    // },
    // {
    //     path: 'contacto', component: ContactoComponent
    // },
    // {
    //     path: 'dtt', component: DesarrolloComponent
    // },
    {
        path: '**', component: FormularioInicialComponent
    }
]

export const appRoutingProviders : any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
