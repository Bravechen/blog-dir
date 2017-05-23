import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { RecommendPage } from './recommend';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
    declarations:[
        RecommendPage
    ],
    imports:[
        IonicPageModule.forChild(RecommendPage),
        DemoComponent,
    ],
    entryComponents:[
        RecommendPage
    ]
})
export class RecPageModule{}
