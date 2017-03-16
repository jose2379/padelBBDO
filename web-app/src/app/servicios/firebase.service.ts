import { Injectable } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Injectable()
export class FirebaseService {
  listUser: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  obtenerUsuarios(){
    this.listUser = this.af.database.list('/usuarios') as FirebaseListObservable<any>;
    return this.listUser;
  }

}
