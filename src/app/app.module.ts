import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainMusicPage } from "../pages/main-music/main-music";
import { ExploreMusicPage } from "../pages/explore-music/explore-music";
import { FriendsPage } from "../pages/friends/friends";

import { SpotifyPage } from "../pages/spotify/spotify";
import { InternetArchivePage } from "../pages/internet-archive/internet-archive";

import { Media } from '@ionic-native/media';
import { MusicPlayerPage } from '../pages/music-player/music-player';

import { ArchiveListPage } from "../pages/archive-list/archive-list";

import { AlbumsListPage } from "../pages/albums-list/albums-list";
import { SongsListPage } from "../pages/songs-list/songs-list"
import { HTTP } from '@ionic-native/http'

import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ShareSongProvider } from '../providers/share-song/share-song';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainMusicPage,
    ExploreMusicPage,
    FriendsPage,
    SpotifyPage,
    InternetArchivePage,
    MusicPlayerPage,
    ArchiveListPage,
    AlbumsListPage,
    SongsListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainMusicPage,
    ExploreMusicPage,
    FriendsPage,
    SpotifyPage,
    InternetArchivePage,
    MusicPlayerPage,
    ArchiveListPage,
    AlbumsListPage,
    SongsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShareSongProvider
  ]
})
export class AppModule {}
