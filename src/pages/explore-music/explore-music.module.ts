import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExploreMusicPage } from './explore-music';

@NgModule({
  declarations: [
    ExploreMusicPage,
  ],
  imports: [
    IonicPageModule.forChild(ExploreMusicPage),
  ],
})
export class ExploreMusicPageModule {}
