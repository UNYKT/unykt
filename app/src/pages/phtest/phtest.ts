import { Component, ViewChild, ContentChild, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
// import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';

import { MockVraagProvider } from '../../providers/vraag-service-mock';



@IonicPage()
@Component({
  selector: 'page-phtest',
  templateUrl: 'phtest.html',
})
export class PhtestPage {
  @ContentChild(RangeComponent) range: RangeComponent;

  slides: Array<any>;
  vragen: any;
  slideCount: number;



  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MockVraagProvider) {
    service.findAll().then(data => {
      
      this.vragen = data;
      // this.slideCount = data.length;
    });
  }

  ionViewDidLoad() {
    this.slides = this.createSliders(this.vragen);
  }



  createSliders(vragen) {
    let s = -1;
    let decimal = false;
    let aantalVragen = vragen.length; 
    let vragenPerSlide = 6;
    let slides = new Array();
    
      // Controleer of i deelbaar is door vragenPerSlide en een geheel getal oplevert
      var uitkomst = (aantalVragen / vragenPerSlide);
      var aantalSlides = Math.ceil(uitkomst);
    
    for(let s = 0; s < aantalSlides; s++){
      let vragenlijst = new Array();
      slides.push(vragenlijst);

      let start = s * vragenPerSlide;
      let max   = (s*vragenPerSlide) + vragenPerSlide;
      if(max > aantalVragen){
        max = aantalVragen;
      }

      for(let v = start; v < max; v++){
        slides[s].push(vragen[v]);
      }

    }

    return slides;
    
  }

}
