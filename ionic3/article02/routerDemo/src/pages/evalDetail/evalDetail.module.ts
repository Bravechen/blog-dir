import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { DemoComponent } from '../../common/DemoComponent.module.ts';
import { EvalDetailPage } from './evalDetail';

@NgModule({
  declarations:[EvalDetailPage],
  imports:[
    IonicPageModule.forChild(EvalDetailPage),
    DemoComponent
  ],
  entryComponents:[EvalDetailPage]
})
export class EvalDetailPageModule{

}
