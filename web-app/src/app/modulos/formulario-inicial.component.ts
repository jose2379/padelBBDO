import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../servicios/firebase.service";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-inicial',
  templateUrl: 'formulario-inicial.component.html',
  styleUrls: ['../scss/main.scss']
})
export class FormularioInicialComponent implements OnInit {
  formularioInicio: FormGroup;
  textoBoton = 'Envía';
  tituloCard = 'Bola de saque';

  constructor(public fbServicio:FirebaseService) { }

  ngOnInit() {
    this.fbServicio.obtenerUsuarios()
      .subscribe(listaUsuarios => {
        console.log('lista', listaUsuarios);
      });
    this.montamosFormulario();
  }
  montamosFormulario() {
    console.log('montamosFormulario');
    this.formularioInicio = new FormGroup({
      email: new FormControl('', Validators.required)
      // ,
      // tecnica: new FormControl(this.obraAEditar.tecnica, Validators.required),
      // dimension: new FormControl(this.obraAEditar.dimension, [Validators.required,
      //   Validators.pattern("^.{5,}$")]),
      // fecha: new FormControl(this.obraAEditar.fecha, [Validators.required,
      //   Validators.pattern("^.{4,}$")]),
      // key_imagen: new FormControl(this.idImgActual, Validators.required)
    });
    console.log(this.formularioInicio);
  }

}
