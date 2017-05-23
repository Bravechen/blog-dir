import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    name:'jp.scene',
    segment:'scene/:sceneId'
})
@Component({
  selector: 'page-scene',
  templateUrl: 'scene.html'
})
export class ScenePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenePage');
  }

}
