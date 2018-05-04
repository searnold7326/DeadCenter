
import { Injectable } from '@angular/core';

/*
  Generated class for the ShareSongProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareSongProvider {

  songName: string;
  fileName: string;

  constructor() {
    console.log('Hello ShareSongProvider Provider');
  }

  setSongInfo(songName, songFile){
    this.fileName = songFile;
    this.songName = songName;
  }

  getSongName(){
    return this.songName;
  }

  getFileName(){
    return this.fileName;
  }
}
