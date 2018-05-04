import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchiveListPage } from './archive-list';

@NgModule({
  declarations: [
    ArchiveListPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchiveListPage),
  ],
})
export class ArchiveListPageModule {}
