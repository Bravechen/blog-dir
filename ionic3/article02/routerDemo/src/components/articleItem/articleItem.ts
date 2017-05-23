import { Component,Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { IRecItemData } from '../../common/interface';

@Component({
    selector:'article-item',
    templateUrl:'./articleItem.html'
})
export class ArticleItem{

    @Input() article:IRecItemData;
    @Input() type:string;

    showDetail:boolean = false;

    constructor(private navCtrl:NavController){
      console.log("In articleItem====>type:",this.type);
    }

    onTapHandler(e){
        if(!this.article){
            return;
        }
        let params = {};
        let router;
        if(this.type === 'scene'){
            router = 'jp.scene';
            params['sceneId'] = this.article.id;
        }else{
            router = 'jp.evalList';
            params['evalId'] = this.article.id;
        }
        this.navCtrl.push(router,params);
    }
}
