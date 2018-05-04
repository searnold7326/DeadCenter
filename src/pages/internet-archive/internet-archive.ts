import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ArchiveListPage } from '../archive-list/archive-list';

/**
 * Generated class for the InternetArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-internet-archive',
  templateUrl: 'internet-archive.html',
})
export class InternetArchivePage {

  public fakeList = [1965, 1967, 1968, 1969, 1970, 1971, 
    1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
    1990, 1991, 1992, 1993, 1994, 1995
  ]

  constructor(public http: HTTP, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetArchivePage');
  }


  private loadArchiveList(item){
    let url = "https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total"+
    "_only=false&count=1000&fields=identifier%2C%20title%2C%20date%2C%20name%2C%20source&q=collection%3A"+
    "(GratefulDead)%20AND%20date%3A%5B"+item+"-01-01%20TO%20"+item+"-12-31%5D";

    

    this.navCtrl.push(ArchiveListPage, {
      firstParam: url
    })
  }



}
