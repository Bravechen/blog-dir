import { Component,Input } from '@angular/core';

import { ISlideData } from '../../common/interface';

@Component({
    selector:'demo-slides',
    templateUrl:'slides.html',
    host:{
      class:'slide-box'
    }
})
export class DemoSlides{

    @Input() slides:ISlideData[];

    public noHeight:boolean = false;

    constructor(){
    }

    ngOnInit(){
      console.log("slide init==============>");
      if(this.slides && this.slides.length>0){
        this.noHeight = true;
      }
    }
}
