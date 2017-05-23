import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './about.ts';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
  declarations:[AboutPage],
  imports:[
    IonicPageModule.forChild(AboutPage),
    DemoComponent
  ],
  entryComponents:[AboutPage]
})
export class AboutPageModule{}
