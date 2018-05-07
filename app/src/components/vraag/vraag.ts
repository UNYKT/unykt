import { Component, ContentChild, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MockVraagProvider } from '../../providers/vraag-service-mock';
import { RangeComponent } from '../range/range';
import { PhtestPage } from '../../pages/phtest/phtest';

@Component({
  selector: 'vragen',
  templateUrl: 'vraag.html'
})
export class VraagComponent {
	@ContentChild(RangeComponent) range: RangeComponent;
  
  vragen: Array<any>;
  dec: boolean = false;
  count = this.Count;

  message:string = "Hallo Nick"; //hier moet de functie Count() komen

  @Output() messageEvent = new EventEmitter<number>();


  
  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
  	service.findAll().then(data => this.vragen = data);
    // this.sendMessage();
  }

   Count() {
  	var lengte = this.vragen.length;
  	console.log(lengte);
    return lengte;
  }

  sendMessage(){
    let tekst = this.vragen.length;
    this.messageEvent.emit(tekst);
  }

}
