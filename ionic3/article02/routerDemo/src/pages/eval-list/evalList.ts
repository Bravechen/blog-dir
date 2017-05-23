import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { IArticleData } from '../../common/interface';

let testList:IArticleData[] = [{
    title:'文章标题',
    picture:'',
    id:'112233',
    authorId:'456789',
    amount:9999,
}];

@IonicPage({
    name:'jp.evalList',
    segment:'evalList/:evalId'
})
@Component({
  selector: 'page-eval-list',
  templateUrl: 'evalList.html'
})
export class EvalListPage {


  public appId:string;
  public articleList:IArticleData[];
  private artId:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artId = navParams.data.artId;
    this.articleList = testList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvalListPage');
  }

}
