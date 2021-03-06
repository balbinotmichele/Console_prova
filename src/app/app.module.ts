import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//mock api
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { WebService } from "./WebService";
import { School } from "./Classes/school";
import { OrarioEditComponent } from "../pages/components/orario-edit-component/orario-edit.component";
import { SezioneEditComponent } from "../pages/components/sezione-edit-component/sezione-edit.component";
import { BusEditComponent } from "../pages/components/bus-edit-component/bus-edit.component";
import { InsegnanteEditComponent } from "../pages/components/insegnanti-edit-component/insegnanti-edit.component";

//a
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrarioEditComponent,
    SezioneEditComponent,
    BusEditComponent,
    InsegnanteEditComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebService
  ]
})
export class AppModule {}
