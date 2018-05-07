import { Component, ContentChild, ViewChild, Output, EventEmitter } from '@angular/core';
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

  message:string = "Hallo Nick";

  @Output() messageEvent = new EventEmitter<string>();


  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
  }

   Count() {
  	var lengte = this.vragen.length;
  	console.log(lengte);
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
