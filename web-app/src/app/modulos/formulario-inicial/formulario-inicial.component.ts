import {Component, OnInit, NgModule} from '@angular/core';
import {FirebaseService} from "../../servicios/firebase.service";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../objetos/usuario";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-inicial',
  templateUrl: 'formulario-inicial.component.html'
})
export class FormularioInicialComponent implements OnInit {
  formularioInicio: FormGroup;
  estadoRegistro: string = 'registro';

  listaRegistros: any[];
  usuario: Usuario;

  //- textos dinámicos
  textoBoton = 'Juega';
  tituloCard = 'Bola de saque';
  labelPrincipal = 'Dime quien eres';

  constructor(public fbServicio: FirebaseService) {
  }

  ngOnInit() {
    this.fbServicio.obtenerUsuarios()
      .subscribe(listaUsuarios => {
        this.listaRegistros = listaUsuarios;
        console.log('lista', listaUsuarios);
      });
    this.montamosFormulario();
  }

  montamosFormulario() {
    // console.log('montamosFormulario');
    switch (this.estadoRegistro){
      case 'registro':
        this.formularioInicio = new FormGroup({
          fc_email: new FormControl('Introduce@tu.email', Validators.required)
          // ,
          // tecnica: new FormControl(this.obraAEditar.tecnica, Validators.required),
          // dimension: new FormControl(this.obraAEditar.dimension, [Validators.required,
          //   Validators.pattern("^.{5,}$")]),
          // fecha: new FormControl(this.obraAEditar.fecha, [Validators.required,
          //   Validators.pattern("^.{4,}$")]),
          // key_imagen: new FormControl(this.idImgActual, Validators.required)
        });

    }
    console.log(this.formularioInicio);
  }

  registramosCambios() {
    console.log('registro', this.formularioInicio.value.fc_email);
    this.usuario = this.listaRegistros.find(usuario => usuario.email == this.formularioInicio.value.fc_email);
    if(this.usuario){
      console.log('ya tenemos usuario', this.usuario);
      if (!this.usuario.passwork) {
        this.formularioInicio = new FormGroup({
          fc_email: new FormControl('Introduce tu contraseña', Validators.required)
        });
      }

    } else {
      console.log('no tenemos');
      this.usuario = new Usuario();
      this.usuario.email = this.formularioInicio.value.fc_email;
      this.fbServicio.listUser.push(this.usuario);

    }
  }

}
