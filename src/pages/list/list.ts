import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//import { DbProvider } from '../../providers/db/db';
import { AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  sitios: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    //public db : DbProvider,
    public modalCtrl : ModalController,
    public alertCtrl : AlertController,
    public dbFirebase : FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewDidEnter(){
    this.dbFirebase.getSitios().subscribe(sitios=>{
      this.sitios = sitios;
    });
  }

  muestraSitio(sitio){
    let modalSitio = this.modalCtrl.create('ModalDetalleSitioPage', sitio);
    modalSitio.present();
  }

  borrarSitio(id){
    
    let alerta = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sisio?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no, no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
            // Eliminamos el sitio
            this.dbFirebase.borrarSitio(id);
          }
        }
      ]
    });
    alerta.present();
  }
}
