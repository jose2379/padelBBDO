import {Component, OnInit, NgModule} from '@angular/core';
import {FirebaseService} from "../../servicios/firebase.service";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../modelos/usuario";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-inicial',
  templateUrl: '../../vistas/formulario-inicial.component.html'
})
export class FormularioInicialComponent implements OnInit {
  formularioInicio: FormGroup;
  estadoRegistro: string = 'registro';

  listaRegistros: any[];
  usuario: Usuario;

  //- textos dinámicos
  textoBoton = 'Juega';
  tituloCard = 'Dime quien eres';
  labelEmail = 'Email / usuario';
  labelPassword = 'Contraseña';

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
          fc_email: new FormControl('', Validators.required),
          fc_password: new FormControl('', [Validators.required, Validators.pattern("^.{5,}$")])
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
    /*this._userService.updateUser(this.user).subscribe(
     response => {
     if (!response.user) {
     this.alertMessage = 'El usuario no se ha actualizado';
     } else {
     // this.user = response.user;
     localStorage.setItem('identity', JSON.stringify(this.user));
     document.getElementById('identity_name').innerHTML = this.user.name;

     if (!this.fileToUpload) {

     } else {
     this.makeFileRequest(this.url + 'upload-image-user/' + this.user._id, [], this.fileToUpload)
     .then(
     (result: any) => {
     this.user.image = result.image;
     localStorage.setItem('identity', JSON.stringify(this.user));

     let image_path = this.url + 'get-image-user/' + this.user.image;
     document.getElementById('image-loaded').setAttribute('src', image_path);
     }
     );
     }
     this.alertMessage = 'El usuario se ha actualizado correctamente';
     }
     }, error => {
     var errorMessage = <any>error;

     if (errorMessage != null) {
     var body = JSON.parse(error._body);
     this.alertMessage = body.message;
     console.log(error);
     }
     }
     );*/
    console.log('email', this.formularioInicio.value.fc_email);
    console.log('pass', this.formularioInicio.value.fc_password);
    /*this.usuario = this.listaRegistros.find(usuario => usuario.email == this.formularioInicio.value.fc_email);
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

     }*/
  }

}
