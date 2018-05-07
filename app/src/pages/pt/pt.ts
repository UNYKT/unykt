import { Component, ViewChild, ContentChild, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
// import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';

import { MockVraagProvider } from '../../providers/vraag-service-mock';



@IonicPage()
@Component({
  selector: 'page-pt',
  templateUrl: 'pt.html',
})
export class PtPage {
  @ContentChild(RangeComponent) range: RangeComponent;

  vragen: Array<any>;
  dec: boolean = false;
  count = this.Count;
  aantal: number;



  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MockVraagProvider) {
    service.findAll().then(data => this.vragen = data);
  }

  // message:number;

  Count() {
    var lengte = this.vragen.length;
    console.log(lengte);
    return lengte;
  }

  sendMessage(){
    this.aantal = this.vragen.length;
  }

  // receiveMessage($event){
  //   this.message = $event;
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
