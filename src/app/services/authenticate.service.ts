import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials) {
    return new Promise((accept, reject) => {
      //return fetch("URL_SERVICIO_EXISTENTE")
      if (credentials.email == "cris@cris.cl" && credentials.password == "12345") {
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }
}
