import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";

import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title = 'MusicFy!';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;

  constructor(private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    this.user_register = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log('identity', this.identity);
    console.log('token', this.token);
  }

  public onSubmit() {
    console.log(this.user);

    // Conseguir los datos del usuario identificado
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;

        if (!this.identity._id) {
          this.errorMessage = 'El usuario no está correctamente identificado';
        } else {
          // crear elemento en el localstorage para tener al usuario en sesión
          localStorage.setItem('identity', JSON.stringify(this.identity));

          // Conseguir el token para enviarselo a cada petición http

          this._userService.signup(this.user, 'true').subscribe(
            response => {
              this.token = response.token;

              if (this.token.length <= 0) {
                this.errorMessage = 'El token no se ha generado';
              } else {
                // crear elemento en el localstorage para tener el token en sesión
                localStorage.setItem('token', this.token);
                this.user = new User('', '', '', '', '', 'ROLE_USER', '');
              }

            }, error => {
              var errorMessage = <any>error;

              if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(error);
              }
            }
          );
        }

      }, error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
          console.log(error);
        }
      }
    );
  }

  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }

  onSubmitRegister() {
    console.log(this.user_register);

    this._userService.register(this.user_register).subscribe(
      response => {
        let user = response.user;
        this.user_register = user;

        if (!user._id) {
          this.alertRegister = 'Error al registrase';
        } else {
          this.alertRegister = 'El registro se ha realizado conrrectamente, identificate con ' + this.user_register.email;
          this.user_register = new User('', '', '', '', '', 'ROLE_USER', '');
        }
      }, error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.alertRegister = body.message;
          console.log(error);
        }
      }
    )

  }
}
