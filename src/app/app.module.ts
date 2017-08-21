import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { MyApp } from './app.component';
import { DbProvider } from '../providers/db/db';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const firebaseConfig = {
  apiKey: "AIzaSyB_0wwM3Oliu-7vauZ9m20Mzojxa7QCAjk",
  authDomain: "mis-sitios-93d9d.firebaseapp.com",
  databaseURL: "https://mis-sitios-93d9d.firebaseio.com",
  projectId: "mis-sitios-93d9d",
  storageBucket: "mis-sitios-93d9d.appspot.com",
  messagingSenderId: "304884259709"
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    DbProvider,
    SQLite,
    LaunchNavigator,
    AuthProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
