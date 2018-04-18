import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';
import { SliderComponent } from '../../components/slider/slider';

/**
 * Generated class for the PerbstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perbst',
  templateUrl: 'perbst.html',
})
export class PerbstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerbstPage');
  }

}
