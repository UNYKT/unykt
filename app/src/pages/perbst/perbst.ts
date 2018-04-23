import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgStyle, NgClass} from '@angular/common';

//Components
import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';
import { SliderComponent } from '../../components/slider/slider';

//Provider
import { ImgProvider } from '../../providers/img-service-mock';


@Component({
  selector: 'page-perbst',
  templateUrl: 'perbst.html',
})
export class PerbstPage {
	images: Array<any>;

  constructor(public navCtrl: NavController, public service: ImgProvider) {
  	service.findAll().then(data => this.images = data);
  }

}
