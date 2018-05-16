import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PhtestPage } from '../pages/phtest/phtest';
import { ProfielPage } from '../pages/profiel/profiel';

//Components
import { VraagComponent } from '../components/vraag/vraag';
import { RangeComponent} from '../components/range/range';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Providers
import { MockVraagProvider } from '../providers/vraag-service-mock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PhtestPage,
    ProfielPage,
    VraagComponent,
    RangeComponent
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
    PhtestPage,
    ProfielPage,
    VraagComponent,
    RangeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MockVraagProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
