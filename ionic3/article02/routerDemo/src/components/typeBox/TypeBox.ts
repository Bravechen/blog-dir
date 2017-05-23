import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector:'type-box',
    templateUrl:'typeBox.html',
    host:{
      class:'type-box'
    }
})
export class TypeBox{

    constructor(private navCtrl:NavController){

    }

    onTapHandler(type){
        console.log("=============>",type);
        this.navCtrl.push('jp.ranking',{
            'phase':type
        });

        return false;
    }

}
