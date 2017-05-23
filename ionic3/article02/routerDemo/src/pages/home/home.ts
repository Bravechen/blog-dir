import { Component } from '@angular/core';

import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { ISlideData } from '../../common/interface';

@IonicPage({
    name:'jp.home',
    segment:'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
    slideList:ISlideData[] = [];

  constructor(public navCtrl: NavController) {

      this.slideList = [{
          index:0,
          title:'小猿搜题',
          imgURL:'../assets/image/xyst001.png'
        },
        {
          index:1,
          title:'提分',
          imgURL:'../assets/image/tf002.png'
        },
        {
          index:2,
          title:'作文不愁五大神器',
          imgURL:'../assets/image/zwbc001.jpg'
        }];
  }
  onGoToRanking(){
      console.log("will go to ranking====>senior");
      this.navCtrl.push('jp.ranking');
  }
}
