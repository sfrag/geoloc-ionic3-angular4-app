import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

/**
 * Generated class for the ModalDetalleSitioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detalle-sitio',
  templateUrl: 'modal-detalle-sitio.html',
})
export class ModalDetalleSitioPage {

  sitio: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private LaunchNavigator: LaunchNavigator) {
      this.sitio = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleSitioPage');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  comoLlegar(){
    let destino = this.sitio.lat+', '+this.sitio.lng;
    this.LaunchNavigator.navigate(destino).then(
      success => console.log ('Launched Navigator'),
      error => console.log ('Error launching navigator', error)
    );
  }

}
