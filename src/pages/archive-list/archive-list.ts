import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the ArchiveListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive-list',
  templateUrl: 'archive-list.html',
})
export class ArchiveListPage {

  private url;

  private concertList = [];

  constructor(public http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
    this.url = navParams.get("firstParam");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchiveListPage');
    console.log(this.url);

    this.http.get(this.url, {}, {
      Authorization: "Bearer BQCGzJ-kyMgxCk4u-2b_EVan3kl5PcLRJc1vMcCxC-Q4Vr4ZEKFW40VNRfCysAamkkhuipomMoIZ-rvXKU5g_PiW17m75X4gYejunzoVzeZuhvLqLPygpmTwzK1iREFuyd6dpJs_dbSdPmNMag"
    })
      .then( response => {
        console.log(response);

        let data = JSON.parse(response.data);

        for (let concert in data){
          this.concertList.concat(concert);
        }
      })
      .catch( error => {
        console.error(error);
      });
  }

  
}
