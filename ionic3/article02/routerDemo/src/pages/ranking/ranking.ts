import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ISubject } from '../../common/interface';

let testObj = [
    {
        title:'应用推荐',
        icon:0,
        appList:[
            {
                appId:'123',                      //应用id
                appName:'网易公开课',              //应用名称
                downloadURL:'string',             //下载地址
                size:'string',                    //应用大小
                companyName:'string',             //公司名称
                icon:'string',                    //应用logo图片地址
                version:'2.0.1',                  //应用的版本
                status:'2',                       //应用当前状态
                packageName:'com.163.gkk',        //应用的包名
                isChecked:false,                  //是否被检查过本机安装情况，默认false
            }
        ]
    }
];

@IonicPage({
    name:'jp.ranking',
    segment:'ranking/:phase'
})
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html'
})
export class RankingPage {
    private type:string;
    //==========================
    public pageTitle:string;
    public subjectList:ISubject[];


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.type = navParams.data.phase;
        this.pageTitle = this.type;
        this.subjectList = testObj; //test
        console.log(`In ranking page,the param is ${this.type}`);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RankingPage');
    }

}
