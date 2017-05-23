import { Component,Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ISubject } from '../../common/interface';

@Component({
    selector:'subject-item',
    templateUrl:'subjectItem.html',
    host:{
      class:"jp-subject"
    }
})
export class SubjectItem{

    @Input() subject:ISubject;

    constructor(private navCtrl:NavController){

    }
}
