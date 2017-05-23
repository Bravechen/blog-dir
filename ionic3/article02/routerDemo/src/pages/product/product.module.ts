import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DemoComponent } from '../../common/DemoComponent.module';
import { ProductPage } from './product';


@NgModule({
    declarations:[ProductPage],
    imports:[
        IonicPageModule.forChild(ProductPage),
        DemoComponent
    ],
    entryComponents:[ProductPage]
})
export class ProductPageModule{}
