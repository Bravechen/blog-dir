import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { FeedbackPage } from './feedback.ts';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
  declarations:[FeedbackPage],
  imports:[
    IonicPageModule.forChild(FeedbackPage),
    DemoComponent
  ],
  entryComponents:[FeedbackPage]
})
export class FeedbackPageModule{}
