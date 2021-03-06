import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carta-modal',
  templateUrl: './carta-modal.page.html',
  styleUrls: ['./carta-modal.page.scss'],
})
export class CartaModalPage {

  songs: any[];
  artist: string;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}
  ionViewDidEnter() {
    this.songs = this.navParams.data.songs;
    this.artist = this.navParams.data.artist;
  }

  async selectSong(song) {
    await this.modalController.dismiss(song);
  }
  async backSong() {
    await this.modalController.dismiss();
  }
}
