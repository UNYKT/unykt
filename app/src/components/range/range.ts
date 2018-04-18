import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VraagComponent } from '../vraag/vraag'
import { MockVraagProvider } from '../../providers/vraag-service-mock';


@Component({
  selector: 'range',
  templateUrl: 'range.html'
})
export class RangeComponent {

  text: string;

  constructor(public navCtrl: NavController, public service: MockVraagProvider) {
    // console.log('Hello RangeComponent Component');
    // this.text = 'Hello World';
  }

}
