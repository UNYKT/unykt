import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';

/**
 * Generated class for the PtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pt',
  templateUrl: 'pt.html',
})
export class PtPage {
	// @ViewChild(VraagComponent) vragen;
	// @ViewChild(RangeComponent) range: RangeComponent;
	dec: boolean = false;
  ptMessage = "Hallo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // count:string;

  // ngAfterViewInit(){
  //   this.count = this.vragen.count;
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtPage');

    var a = 12; // Count() uit vraag.ts moet hier komen
    var uit = (a / Math.floor(10));
    var res = (uit - Math.floor(uit));

    if (res !== 0) {
      this.dec = true;
      console.log(this.dec);
    }
    else {
      console.log(this.dec);
    }
  }

}
