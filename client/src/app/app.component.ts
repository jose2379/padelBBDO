import {Component} from '@angular/core';
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'MusicFy!';
  public user: User;
  public identity = true;
  public token;

  constructor() {
    this.user = new User('', '', '', '', '', '', '');
  }

  public onSubmit() {
    console.log(this.user);
  }
}
