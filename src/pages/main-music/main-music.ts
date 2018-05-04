import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumsListPage } from '../albums-list/albums-list';
import { SongsListPage } from "../songs-list/songs-list"

/**
 * Generated class for the MainMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-music',
  templateUrl: 'main-music.html',
})
export class MainMusicPage {

  private choices = [
    {
      name: "Songs"
    },
    {
      name: "Playlists"
    },
    {
      name: "Albums"
    },
    {
      name: "Favorites"
    },
    {
      name: "Local Music"
    },
    {
      name: "Internet Archive"
    },
    {
      name: "Spotify"
    }
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMusicPage');
  }


  private determinePage(choiceName){
    if(choiceName == "Albums"){
      this.navCtrl.push(AlbumsListPage);
    }
    if(choiceName == "Songs"){
      this.navCtrl.push(SongsListPage);
    }
  }

}
