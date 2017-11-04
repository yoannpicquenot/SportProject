import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { WorkoutsPage, WorkoutsModal } from '../pages/workouts/workouts';
import { ExercicesPage } from '../pages/exercices/exercices';

import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MagicBallProvider } from '../providers/magic-ball/magic-ball';
import { WorkoutsProvider } from '../providers/workouts/workouts';
// import { FirebaseProvider } from '../providers/firebase/firebase';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "K2zD4qTpiGznxHfEVdvKhu9s",
  authDomain: "sportproject-56408.firebaseio.com",
  databaseURL: "https://sportproject-56408.firebaseio.com",
  projectId: "sportproject-56408",
  storageBucket: "sportproject-56408.firebaseio.com",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    ExercicesPage,
    WorkoutsPage,
    WorkoutsModal
  ],
  imports: [
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, { links: [] })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoutPage,
    LoginPage,
    ExercicesPage,
    WorkoutsPage,
    WorkoutsModal
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MagicBallProvider,
    NativeStorage,
    WorkoutsProvider,
    FirebaseProvider
  ]
})
export class AppModule { }
