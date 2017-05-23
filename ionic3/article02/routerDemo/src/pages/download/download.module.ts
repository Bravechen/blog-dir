import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { DownloadPage } from './download.ts';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
  declarations:[DownloadPage],
  imports:[
    IonicPageModule.forChild(DownloadPage),
    DemoComponent
  ],
  entryComponents:[DownloadPage]
})
export class DownloadPageModule{}
