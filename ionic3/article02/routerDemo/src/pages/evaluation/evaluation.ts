import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { IRecItemData } from '../../common/interface';

let testList = [{
    title:'深度评测文章标题1',
    picture:'http://www.jiaoping.com/static/upload/images/201704/1492672627644.jpg',
    id:'789',
    state:1,
    author:'',
    acount:999,
    prompt:'(点击查看推荐详情)',
},{
    title:'深度评测文章标题2',
    picture:'http://www.jiaoping.com/static/upload/images/201704/1492672627644.jpg',
    id:'7890',
    state:1,
    author:'',
    acount:999,
    prompt:'(点击查看推荐详情)',
}];

@IonicPage({
    name:'jp.evaluation',
    segment:'eval'
})
@Component({
    selector:'page-eval',
    templateUrl:'evaluation.html'
})
export class EvaluationPage{

    public evalList:IRecItemData[];

    constructor(private navCtrl:NavController){
        this.evalList = testList;
    }
}
