import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';

/**
 * Generated class for the PtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pt',
  templateUrl: 'pt.html',
})
export class PtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtPage');
  }

}
