import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Demo } from './app.component';
import { DemoComponent } from '../common/DemoComponent.module';

import { HelpMenu } from '../pages/helpMenu/helpMenu';

@NgModule({
    declarations: [
        Demo,
        HelpMenu,
    ],
    imports: [
        BrowserModule,
        DemoComponent,
        IonicModule.forRoot(Demo)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        Demo,
        HelpMenu,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class DemoModule {}
