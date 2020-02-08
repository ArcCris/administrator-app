import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authAF: AngularFireAuth) { }

  loginAF(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authAF.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => {
        reject('Login incorrecto');
      });
    });
  }

  registerEmailAF(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authAF.auth.createUserWithEmailAndPassword(email, password).then(user => {
        resolve(user);
        console.log(user)
      }).catch(err => {
        console.log(err);
        reject('Ya existe la dirección de email');
      });
    });
  }
}
