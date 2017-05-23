import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  name:'help.download',
  segment:'download'
})
@Component({
  selector: 'page-download',
  templateUrl: 'download.html'
})
export class DownloadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadPage');
  }

}
