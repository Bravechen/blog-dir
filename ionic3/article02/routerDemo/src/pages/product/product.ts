import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage({
    name:'jp.product',
    segment:'product/:appId'
})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public appId:string;
  public appName:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.appId = navParams.data.appId;
      console.log("In product page ,the app id====>",this.appId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
