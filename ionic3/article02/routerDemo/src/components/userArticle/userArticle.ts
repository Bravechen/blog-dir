import { Component,Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { IArticleData,ITeacherInfo } from '../../common/interface';

@Component({
    selector:'user-article',
    templateUrl:'./userArticle.html'
})
export class UserArticle{

    teachId:string;
    @Input() article:IArticleData = {
      title:'',
      id:''
    };

    public teacher:ITeacherInfo = {
      userName:'',
      avatar:'',
      teachId:''
    };

    constructor(private navCtrl:NavController){

    }

    onTapHandler(e){
      this.navCtrl.push('jp.evalDetail',{
        artId:this.article.id
      });
    }

}
