import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PtPage } from '../pages/pt/pt';
import { PerbstPage } from '../pages/perbst/perbst';

//Components
import { VraagComponent } from '../components/vraag/vraag';
import { RangeComponent} from '../components/range/range';
import { SliderComponent } from '../components/slider/slider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Providers
import { MockVraagProvider } from '../providers/vraag-service-mock';
import { ImgProvider } from '../providers/img-service-mock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PtPage,
    PerbstPage,
    VraagComponent,
    RangeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PtPage,
    PerbstPage,
    VraagComponent,
    RangeComponent,
    SliderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MockVraagProvider,
    ImgProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
