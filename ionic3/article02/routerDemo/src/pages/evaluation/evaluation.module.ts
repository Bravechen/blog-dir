import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EvaluationPage } from './evaluation';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
    declarations:[
        EvaluationPage
    ],
    imports:[
        IonicPageModule.forChild(EvaluationPage),
        DemoComponent
    ],
    entryComponents:[
        EvaluationPage
    ]
})
export class EvalPageModule{}
