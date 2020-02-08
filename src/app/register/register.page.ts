import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: "El email es requerido" },
      { type: "minlength", message: "Minimo 3 caracteres" }
    ],
    apellido: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Minimo 3 caracteres" }
    ],
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Correo no valido" }
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Minimo 5 caracteres" }
    ]
  };

  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage,
    private authServiceAF: AuthService) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)]),
      )
    });
  }

  register(userData) {
    this.authService.registerUser(userData).then(() => {
      this.goToLogin();
    })
  }
  goToLogin() {

    this.navCtrl.navigateBack("/login");
  }

  registerAF(userData) {
    console.log(userData)
    this.authServiceAF.registerEmailAF(userData.email, userData.password).then(res => {
      this.goToLogin();
    }).catch(err => {
      this.errorMessage = err;
    })
  }

}
