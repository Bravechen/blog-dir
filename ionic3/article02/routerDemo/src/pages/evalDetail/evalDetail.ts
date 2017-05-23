import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  name:'jp.evalDetail',
  segment:'evalDetail/:artId'
})
@Component({
  selector: 'page-eval-detail',
  templateUrl: 'evalDetail.html'
})
export class EvalDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvalDetailPage');
  }

}
