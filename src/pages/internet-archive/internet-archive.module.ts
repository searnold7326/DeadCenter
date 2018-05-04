import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternetArchivePage } from './internet-archive';

@NgModule({
  declarations: [
    InternetArchivePage,
  ],
  imports: [
    IonicPageModule.forChild(InternetArchivePage),
  ],
})
export class InternetArchivePageModule {}
