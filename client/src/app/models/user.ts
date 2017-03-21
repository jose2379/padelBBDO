/**
 * Created by josemariaminambresredondo on 21/3/17.
 */
export class User {
  constructor(public _id: string,
              public name: string,
              public surname: string,
              public email: string,
              public password: string,
              public role: string,
              public image: string) {
  }
}
