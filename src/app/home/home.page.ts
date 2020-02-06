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
  song: {
    preview_url: string;
    playing: boolean;
    name: string;
  }={
    preview_url:"",
    playing:false,
    name:""
  };
  currentSong : HTMLAudioElement;
  newTime;

  constructor(private cartaService: CartaService, private modalController: ModalController) { }

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

    modal.onDidDismiss().then(dataReturned => {
      this.reproductor(dataReturned);
    })

    return await modal.present();
  }

  async showAlbums(artist) {
    const album = await this.cartaService.getAlbumTracks(artist.id);
    const modal = await this.modalController.create({
      component: CartaModalPage,
      componentProps: {
        songs: album.items,
        artist: album.items.artists
      }
    });

    modal.onDidDismiss().then(dataReturned => {
      this.reproductor(dataReturned);
    });

    return await modal.present();
  }

  play() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime = (this.currentSong.currentTime * (this.currentSong.duration / 10)) / 100;
    });

    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time : number) {
    if (time) {
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }

  reproductor(dataReturned){
    if (dataReturned.data !== undefined) {
      this.song = dataReturned.data;
      if(this.song.playing){
        this.pause();
      }
      this.play();
    }
  }
}
