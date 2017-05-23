import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { OptionPage } from './option.ts';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
  declarations:[OptionPage],
  imports:[
    IonicPageModule.forChild(OptionPage),
    DemoComponent
  ],
  entryComponents:[OptionPage]
})
export class OptionPageModule{}
