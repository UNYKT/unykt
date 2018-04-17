import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MockVraagProvider } from '../../providers/vraag-service-mock';

@Component({
  selector: 'vragen',
  templateUrl: 'vraag.html'
})
export class VraagComponent {
  
  vragen: Array<any>;
  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
  }

}
