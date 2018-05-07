import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';


@IonicPage()
@Component({
  selector: 'page-pt',
  templateUrl: 'pt.html',
})
export class PtPage {
	dec: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  message:number;

  receiveMessage($event){
    this.message = $event;
    debugger;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PtPage');
    debugger;

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
