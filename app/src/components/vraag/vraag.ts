import { Component, ContentChild, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MockVraagProvider } from '../../providers/vraag-service-mock';
import { RangeComponent } from '../range/range';
import { PtPage } from '../../pages/pt/pt';

@Component({
  selector: 'vragen',
  templateUrl: 'vraag.html'
})
export class VraagComponent {
	@ContentChild(RangeComponent) range: RangeComponent;
  
  vragen: Array<any>;
  dec: boolean = false;
  // count: string = "Hallloooo"


  @Input() vraagMessage: string;


  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
  }

   Count() {
  	var lengte = this.vragen.length;
  	console.log(lengte);
  }

}
