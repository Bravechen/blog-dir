import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { DemoSlides } from '../../components/slides/DemoSlides';
import { TypeBox } from '../../components/typeBox/TypeBox';

@NgModule({
    declarations:[
        HomePage,
        DemoSlides,
        TypeBox,
    ],
    imports:[
        IonicPageModule.forChild(HomePage),
    ],
    entryComponents:[
        HomePage,
        DemoSlides,
        TypeBox,
    ],
})
export class HomePageModule{
    constructor(){
    }
}
