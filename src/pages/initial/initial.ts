import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

declare var google: any;

/**
 * Generated class for the InitialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {

  map: any; // Map Handler
  coords: any = { lat: 0, lng:0 }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public platform: Platform,
    private geolocation: Geolocation) 
    {
      platform.ready().then(() => { //Plataforma lista, tenemos acceso a los plugins
        this.obtenerPosicion();
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  loadMap(){

    var myIcon = {
      url: 'assets/img/geo-256x256.png',
      scaledSize: new google.maps.Size(50,50),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0,0)
    }
    let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 12
    });
    // Geo Marcador

    let miMarker = new google.maps.Marker({
      icon: myIcon,
      size: new google.maps.Size(30, 30),
      map: this.map,
      position: this.coords
    });
  }

  nuevoSitio(){
    //abrimos el modal
    let mimodal = this.modalCtrl.create(
      'ModalNuevoSitioPage', this.coords);
    mimodal.present();
  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;

      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }
}
