import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { EvalListPage } from './evalList';
import { DemoComponent } from '../../common/DemoComponent.module';

@NgModule({
    declarations:[EvalListPage],
    imports:[
        IonicPageModule.forChild(EvalListPage),
        DemoComponent
    ],
    entryComponents:[EvalListPage]
})
export class EvalListPageModule{}
