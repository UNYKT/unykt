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
  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
  }

}
