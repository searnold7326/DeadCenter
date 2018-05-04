import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsListPage } from './albums-list';

@NgModule({
  declarations: [
    AlbumsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumsListPage),
  ],
})
export class AlbumsListPageModule {}
