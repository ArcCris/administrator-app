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
    title: "Register",
    description: "Join this community and dont forget share with your friendless",
    icon: "person-add",
    final: ""
  },
  {
    title: "Sign in",
    description: "Into and you know more about ArcCris, get a lot discounts in food in the Restorants",
    icon: "walk",
    final: ""
  },
  {
    title: "Enjoy!",
    description: "Come with yours friend and take a good time, celebrate yours Birthday, Marrieges, and Graduations",
    icon: "contacts",
    final: "arrow-round-forward"
  }];
  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set("isIntroShowed",true);

    this.router.navigateByUrl("/login");
  }

}
