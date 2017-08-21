import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DbProvider {

  db : SQLiteObject = null; 
  constructor(public sqlite: SQLite) {
    console.log('Hello DbProvider Provider');
  }

  public openDb(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default' //este campo es obligatorio
    })
    .then((db : SQLiteObject) => {
      this.db = db;
    })
  }

  public createTableSitios(){
    return this.db.executeSql("create table if not exists sitios(id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, address TEXT, description TEXT, foto TEXT )", {})
  }

  public addSitio(sitio){
    let sql = "INSERT INTO sitios (lat, lng, address, description, foto) values (?,?,?,?,?)";
    return this.db.executeSql(sql, [sitio.lat, sitio.lng, sitio.address, sitio.description, sitio.foto]);
  }

  public getSitios(){
    let sql = "SELECT * FROM sitios";
    return this.db.executeSql(sql,{});
  }

  public modificaSitio(sitio){
    let sql = "UPDATE sitios SET lat = ?, lng = ?, address = ?, description = ?, foto = ? WHERE id = ?";
    return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.address,sitio.description,sitio.foto,sitio.id]);
  }

  public borrarSitio(id){
    let sql = "DELETE FROM sitios WHERE id=?";
    return this.db.executeSql(sql,[id]);
  }

  
}
