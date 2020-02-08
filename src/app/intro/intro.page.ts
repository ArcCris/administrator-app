import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }
 
  slides = [{
    title: "Registrate",
    description: "Registrate y conoce nuestros productos",
    icon: "finger-print",
    final: ""
  },
  {
    title: "Ingresa",
    description: "Ve nuestras ofertas y recomendaciones del día.",
    icon: "walk",
    final: ""
  },
  {
    title: "Diviertete!",
    description: "Invita a tus amigos a usar la app y obten descuentos",
    icon: "contacts",
    final: "arrow-round-forward"
  }];
  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set("isIntroShowed",true);

    this.router.navigateByUrl("/login");
  }

}
