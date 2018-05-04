import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media,MediaObject } from '@ionic-native/media';

import { Events } from "ionic-angular";
import { ShareSongProvider } from '../../providers/share-song/share-song';
/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {

  private song: MediaObject;
  private songIsPaused = false;

  nowPlayingName: string;

  constructor(public sharedSong: ShareSongProvider, public events: Events, public media: Media, public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');

    //If goToMusicPlayer is called playMusic
    this.events.subscribe("functioncall:goToMusicPlayer", eventData => {
      this.playMusic(eventData);
    });
  }

  //Plays the selected song and will switch if a different song is picked
  public playMusic(songName){
    if(this.song && this.nowPlayingName != songName){
      this.song.stop();
      this.song.release();
      this.song = this.media.create(this.sharedSong.getFileName());
      this.song.play();
      this.nowPlayingName = songName;
    }

    if(!this.song){
      this.song = this.media.create(this.sharedSong.getFileName());
      this.song.play();
      this.nowPlayingName = songName;

    }else if(this.songIsPaused){
      this.song.play();
      this.songIsPaused = false;
    }
  }

  //Stops Song
  stopSong(){
    if(this.song){
      this.song.stop();
      this.song.release();
      this.song = null;
      this.songIsPaused = false;
      this.nowPlayingName = null;
    }
  }

  //Pauses song
  pauseSong(){
    if(this.song){
      this.song.pause();
      this.songIsPaused = true;
    }
  }


  public playMusic2(){
    if(this.songIsPaused){
      this.song.play();
      this.songIsPaused = false;
    }
  }

}
