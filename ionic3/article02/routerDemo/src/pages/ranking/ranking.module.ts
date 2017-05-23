import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DemoComponent } from '../../common/DemoComponent.module';
import { RankingPage } from './ranking';
import { SubjectItem } from '../../components/subjectItem/SubjectItem';

@NgModule({
    declarations:[
        RankingPage,
        SubjectItem,
    ],
    imports:[
        IonicPageModule.forChild(RankingPage),
        DemoComponent,
    ],
    entryComponents:[
        RankingPage,
        SubjectItem,
    ]
})
export class RankingPageModule{}
