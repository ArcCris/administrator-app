import { Component } from '@angular/core';
import { CartaService } from '../services/carta.service';
import { ModalController } from '@ionic/angular';
import { CartaModalPage } from '../carta-modal/carta-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };
  songs: any[] = [];
  albums: any[] = [];
  artists: any[] = [];

  constructor(private cartaService: CartaService, private modalController:ModalController) { }

  ionViewDidEnter() {
    this.cartaService.getNewReleases().then(newReleases => {
      this.artists = this.cartaService.getArtists();
      this.songs = newReleases.albums.items.filter(e => e.album_type == "single");
      this.albums = newReleases.albums.items.filter(e => e.album_type == "album");
    });
  }
  async showSongs(artist) {
    const songs = await this.cartaService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: CartaModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    return await modal.present();
  }
}
