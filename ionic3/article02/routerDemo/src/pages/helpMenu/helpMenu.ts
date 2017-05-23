import { Component,Input,Output,EventEmitter } from '@angular/core';

import { MenuController } from 'ionic-angular';

@Component({
  selector:'help-menu',
  templateUrl:'./helpMenu.html'
})
export class HelpMenu{

  @Input() content:any;
  @Output() help:EventEmitter<any>;

  constructor(private menuCtrl:MenuController){
    //console.log("=======================>",this.navCtrl);
    this.help = new EventEmitter();
  }
  onTapHandler(type){
    switch(type){
      case 'feedback':
        //this.nav.push('help.feedback');

        this.help.emit({type:'help',goto:'help.feedback'});
        break;
      case 'download':
        //this.navCtrl.push('help.download');
        this.help.emit({type:'help',goto:'help.download'});
        break;
      case 'option':
        //this.navCtrl.push('help.option');
        this.help.emit({type:'help',goto:'help.option'});
        break;
      case 'about':
        //this.navCtrl.push('help.about');
        this.help.emit({type:'help',goto:'help.about'});
        break;
      case 'home':
        this.help.emit({type:'help',goto:'TabsPage'});
        break;
      default:
        break;
    }
    this.menuCtrl.close();
  }
}
