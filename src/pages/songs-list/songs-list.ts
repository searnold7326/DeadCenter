import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Media, MediaObject } from "@ionic-native/media";

import { MusicPlayerPage } from "../../pages/music-player/music-player"

import { Events } from "ionic-angular";
import { ShareSongProvider } from '../../providers/share-song/share-song';


/**
 * Generated class for the SongsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs-list',
  templateUrl: 'songs-list.html',
})
export class SongsListPage {

  private song;

  private songs = [
    
    {
      name: "Mexicali Blues",
      file: "../../assets/media/DavesPicks25/4_Mexicali Blues.wav"
    },
    {
      name: "Me and My Uncle",
      file: "../../assets/media/DavesPicks25/5_Me and My Uncle.wav"
    },
    {
      name: "Passenger",
      file: "../../assets/media/DavesPicks25/9_Passenger.wav"
    },
    {
      name: "Dire Wolf",
      file: "../../assets/media/DavesPicks25/10_Dire Wolf.wav"
    },
    {
      name: "Johnny B Goode",
      file: "../../assets/media/DavesPicks25/23_Johnny B Goode.wav"
    }
    
  ]
  

  constructor(public shareSongs: ShareSongProvider, public events: Events, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsListPage');
  }

  goToMusicPlayer(){
    //this.navCtrl.setRoot( MusicPlayerPage, {}, {animate: true, direction: 'forward'});
    //this.events.publish("functioncall:goToMusicPlayer", songFile);
    console.log("In go to music player");
    this.navCtrl.parent.select(2);

    //MusicPlayerPage.playMusic(songFile);
  }

  saveSong(songName,songFile){
    this.song = songFile;
    this.shareSongs.setSongInfo(songName, songFile);
    this.events.publish("functioncall:goToMusicPlayer", songName);
    this.goToMusicPlayer();
  }
}
