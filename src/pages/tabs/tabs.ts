import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MainMusicPage } from '../main-music/main-music';
import { ExploreMusicPage } from '../explore-music/explore-music';
import { FriendsPage } from '../friends/friends';
import { MusicPlayerPage } from '../music-player/music-player'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MainMusicPage;
  tab3Root = MusicPlayerPage;
  tab4Root = ExploreMusicPage;
  tab5Root = FriendsPage;

  constructor() {

  }
}
