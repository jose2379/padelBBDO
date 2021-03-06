import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FormularioInicialComponent} from './componentes/formulario-inicial/formulario-inicial.component';
import {FirebaseService} from "./servicios/firebase.service";
import {appRoutingProviders, routing} from "./app.routing";
import {AngularFireModule} from "angularfire2";
import {NormasJuegoComponent} from './componentes/normas-juego/normas-juego.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCg9AklfpP93On-ROBuAA3GvXRfpwPUhIc",
  authDomain: "bddo-padel.firebaseapp.com",
  databaseURL: "https://bddo-padel.firebaseio.com",
  storageBucket: "bddo-padel.appspot.com",
  messagingSenderId: "797219952481"
};

@NgModule({
  declarations: [
    AppComponent,
    FormularioInicialComponent,
    NormasJuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
