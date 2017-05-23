import {Component} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    templateUrl:'tabs.html'
})
export class TabsPage{
    store = 'jp.home';
    recommend = 'jp.recommend';
    evaluation = 'jp.evaluation';

    constructor(private navCtrl:NavController){}
}
