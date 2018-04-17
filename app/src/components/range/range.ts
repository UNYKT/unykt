import { Component } from '@angular/core';

/**
 * Generated class for the RangeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'range',
  templateUrl: 'range.html'
})
export class RangeComponent {

  text: string;

  constructor() {
    console.log('Hello RangeComponent Component');
    this.text = 'Hello World';
  }

}
