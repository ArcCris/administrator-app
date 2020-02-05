import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage:Storage) { }

  async loginUser(credentials) {
    const user = await this.storage.get("user");
    return new Promise((accept, reject) => {
      //return fetch("URL_SERVICIO_EXISTENTE")
        if (credentials.email == user.email  && credentials.password == user.password) {
          accept("Login correcto");
        } else {
          reject("Login incorrecto");
        }
      
    });
  }

  registerUser(userData){
    //encriptar password
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
