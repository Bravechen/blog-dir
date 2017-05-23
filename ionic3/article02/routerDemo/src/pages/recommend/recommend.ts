import { Component,Input } from '@angular/core';

import { IonicPage,NavController } from 'ionic-angular';

import { IRecItemData } from '../../common/Interface';

let testList:IRecItemData[] = [{
    title:'文章标题1',
    picture:'http://www.jiaoping.com/static/upload/images/201704/1492672627644.jpg',
    id:'456',
    state:1,
    author:'',
    amount:0,
    prompt:'(点击查看主题详情)',
},{
    title:'文章标题2',
    picture:'http://www.jiaoping.com/static/upload/images/201704/1492672627644.jpg',
    id:'456123',
    state:1,
    author:'',
    amount:0,
    prompt:'(点击查看主题详情)',
}];

@IonicPage({
    name:'jp.recommend',
    segment:'rec'
})
@Component({
    selector:'page-rec',
    templateUrl:'recommend.html'
})
export class RecommendPage{

    @Input() recList:IRecItemData[];

    public artType:string = 'scene';

    constructor(private navCtrl:NavController){
        this.recList = testList;
    }
}
