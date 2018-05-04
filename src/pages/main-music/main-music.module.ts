import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMusicPage } from './main-music';

@NgModule({
  declarations: [
    MainMusicPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMusicPage),
  ],
})
export class MainMusicPageModule {}
