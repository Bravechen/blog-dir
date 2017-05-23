import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class Demo {

  @ViewChild(Nav) nav:Nav;
  rootPage:any = 'TabsPage';

  constructor(platform: Platform,statusBar:StatusBar,splashscreen:SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(window['cordova']){
          statusBar.styleDefault();
          splashscreen.hide();
      }
    });
  }

  onMenuChanged(e){
    this.nav.setRoot(e.goto);
  }

}
