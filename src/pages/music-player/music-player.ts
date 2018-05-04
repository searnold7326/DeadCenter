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

  private nowPlaying;

  constructor(public sharedSong: ShareSongProvider, public events: Events, public media: Media, public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  ionViewWillEnter(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
    this.events.subscribe("functioncall:goToMusicPlayer", eventData => {
      this.playMusic(eventData);
    });
  }

  public playMusic(songName){
    console.log("This should be playing")

    
    if(!this.song){
      this.song = this.media.create(this.sharedSong.getFileName());
      this.song.play();
      this.nowPlaying = this.song;
    }else if(this.songIsPaused){
      this.song.play();
      this.songIsPaused = false;
    }
  }

  stopSong(){
    if(this.song){
      this.song.stop();
      this.song.release();
      this.song = null;
      this.songIsPaused = false;
    }
  }

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
