import { Component,Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { IAppInfo } from '../../common/interface';

const app:IAppInfo = {
  appId:"123",
  appName:"测试应用",
  downloadURL:"http://www.jiaoping.com/123",
  size:"6.2",
  companyName:"netease",
  icon:"",
  version:"1.0.2",
  status:"2",
  packageName:"11111",
  shortdes:"一句话介绍一句话介绍一句话介绍一句话介绍",
  extension:-1
};

@Component({
    selector:'app-item',
    templateUrl:'appItem.html'
})
export class AppItem{

    @Input() appId:String;

    public appName:string;
    public size:string;
    public shortdes:string;
    public extension:number;
    public icon:string;

    constructor(private navCtrl:NavController){
      this.appName = app.appName;
      this.size = app.size;
      this.shortdes = app.shortdes;
      this.extension = app.extension;
      this.icon = app.icon;
    }
    onTapHandler(e){
        console.log("tap a app ,will go to product=====>",e);
        this.navCtrl.push('jp.product',{
            appId:this.appId
        });
    }
}
