import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'range',
  templateUrl: 'range.html'
})
export class RangeComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    // console.log('Hello RangeComponent Component');
    // this.text = 'Hello World';
  }

}
