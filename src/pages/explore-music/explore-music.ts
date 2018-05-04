import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpotifyPage } from '../spotify/spotify';
import { InternetArchivePage } from '../internet-archive/internet-archive';

/**
 * Generated class for the ExploreMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore-music',
  templateUrl: 'explore-music.html',
})
export class ExploreMusicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExploreMusicPage');
  }

  private goToSpotifyPage (){
    this.navCtrl.push ( SpotifyPage );
  }

  private goToInternetArchivePage () {
    this.navCtrl.push ( InternetArchivePage );
  }

}
