import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioDeSesionPage } from '../inicio-de-sesion/inicio-de-sesion';
import { CercaDeMPage } from '../cerca-de-m/cerca-de-m';
import { CategoriasPage } from '../categorias/categorias';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }
  goToInicioDeSesion(params){
    if (!params) params = {};
    this.navCtrl.push(InicioDeSesionPage);
  }goToCategorias(params){
    if (!params) params = {};
    this.navCtrl.push(CategoriasPage);
  }goToCercaDeM(params){
    if (!params) params = {};
    this.navCtrl.push(CercaDeMPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
}
