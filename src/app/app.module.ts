import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {} from '@ionic/cloud-angular';

import { MyApp } from './app.component';

//import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { InicioDeSesionPage } from '../pages/inicio-de-sesion/inicio-de-sesion';
import { CategoriasPage } from '../pages/categorias/categorias';
// import { CercaDeMPage } from '../pages/cerca-de-m/cerca-de-m';
import { ReservaExitosaPage } from '../pages/reserva-exitosa/reserva-exitosa';
import { VidaNocturnaPage } from '../pages/sitios/vida-nocturna';
import { RestaurantesPage } from '../pages/sitios/restaurantes';
import { PlanesCulturalesPage } from '../pages/sitios/planes-culturales';
import { ShoppingPage } from '../pages/sitios/shopping';
import { FragmaPage } from '../pages/sitios/vida-nocturna/fragma';
import { MrDrinkPage } from '../pages/sitios/vida-nocturna/mrdrink';
import { BabarPage } from '../pages/sitios/vida-nocturna/babar';
import { AlquimicoPage } from '../pages/sitios/vida-nocturna/alquimico';
import { LaVitrolaPage } from '../pages/sitios/restaurantes/la-vitrola';
import { DonaFridaPage } from '../pages/sitios/restaurantes/dona-frida';
import { LaGirolataPage } from '../pages/sitios/restaurantes/la-girolata';
import { SalouPage } from '../pages/sitios/restaurantes/salou';
import { ReservasEnLineaPage } from '../pages/reservas-en-linea/reservas-en-linea';
import { RegistroPage } from '../pages/registro/registro';
import { LoadingSpinner } from '../services/LoadingSpinner';
import { TabsPage } from '../pages/tabs/tabs';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '765d228d'
  },
  'push': {
    'sender_id': '939151682913',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    InicioDeSesionPage,
    CategoriasPage,
    ReservaExitosaPage,
    VidaNocturnaPage,
    RestaurantesPage,
    PlanesCulturalesPage,
    ShoppingPage,
    FragmaPage,
    MrDrinkPage,
    BabarPage,
    AlquimicoPage,
    LaVitrolaPage,
    DonaFridaPage,
    LaGirolataPage,
    SalouPage,
    ReservasEnLineaPage,
    RegistroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CloudModule.forRoot(cloudSettings),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    InicioDeSesionPage,
    CategoriasPage,
    // CercaDeMPage,
    ReservaExitosaPage,
    VidaNocturnaPage,
    RestaurantesPage,
    ReservasEnLineaPage,
    RegistroPage,
    PlanesCulturalesPage,
    ShoppingPage,
    FragmaPage,
    MrDrinkPage,
    BabarPage,
    AlquimicoPage,
    LaVitrolaPage,
    DonaFridaPage,
    LaGirolataPage,
    SalouPage,
    TabsPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    NativeStorage,
    Facebook,
    Geolocation,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "es-ES" }, LoadingSpinner
  ]
})
export class AppModule { }
