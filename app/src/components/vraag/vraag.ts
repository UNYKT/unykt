import { Component, ContentChild, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MockVraagProvider } from '../../providers/vraag-service-mock';
import { RangeComponent } from '../range/range';

@Component({
  selector: 'vragen',
  templateUrl: 'vraag.html'
})
export class VraagComponent {
	@ContentChild(RangeComponent) range: RangeComponent;
  
  vragen: Array<any>;
  dec: boolean = false;
  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
  }

   Count() {
  	var lengte = this.vragen.length;
  	console.log(lengte);
  }


  CheckDec() {
    var a = 22;
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
