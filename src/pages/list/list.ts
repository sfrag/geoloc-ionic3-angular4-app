import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

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
    public db : DbProvider,
    public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewDidEnter(){
    this.db.getSitios().then((res)=>{
      this.sitios = [];
      for (var i = 0; i < res.rows.length;i++){
        this.sitios.push({
          id: res.rows.item(i).id,
          lat: res.rows.item(i).lat,
          lng: res.rows.item(i).lng,
          address: res.rows.item(i).address,
          description: res.rows.item(i).description,
          foto: res.rows.item(i).foto
        });
      }
    },(err)=>{ alert('error al sacar datos de la base de datos'+err)});
  }

  muestraSitio(sitio){
    let modalSitio = this.modalCtrl.create('ModalDetalleSitioPage', sitio);
    modalSitio.present();
  }
}
