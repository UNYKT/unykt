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
	profiel: number = 1;
	value: any;
  
  constructor(public navCtrl: NavController, public service: ImgProvider) {
  	service.findAll().then(data => {
  		this.images = data;
  		this.value = this.images;

  	});
  }

  ionViewDidLoad(){
  	this.images = this.filterPhotos();
  }

  filterPhotos() {
  	let imageLength = this.images.length;

  	for(let f = 0; f < imageLength; f++) {
  		if(this.profiel == 2){
  			this.images[f].push(imageLength);
  		}
  		// this.images[f];
  	}
  		return this.images;
  	}
  }

