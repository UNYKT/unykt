import { Component, ViewChild, ContentChild, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
// import { VraagComponent } from '../../components/vraag/vraag';
import { RangeComponent } from '../../components/range/range';

import { MockVraagProvider } from '../../providers/vraag-service-mock';
// import vragen from '../../providers/mock-vraag';



@IonicPage()
@Component({
  selector: 'page-phtest',
  templateUrl: 'phtest.html',
})
export class PhtestPage {
  @ContentChild(RangeComponent) range: RangeComponent;

  slides: Array<any>;
  vragen: any;
  antwoorden: Array<any> = [];
  // antwoordTotaal: number = 0;
  // rangeValue: Array<any>;
  // value: any;
  // valueRange: vragen[] = vragen;






  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MockVraagProvider) {
    service.findAll().then(data => {
      
      this.vragen = data;
      // this.value = data;
      // this.slideCount = data.length;
    });
  }

  ionViewDidLoad() {
    this.slides = this.createSliders(this.vragen);

    for(let v = 0; v < this.vragen.length; v++){
      this.antwoorden.push(0);
    }

    // this.rangeValue = this.valueRange(this.vragen);
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
      console.log(vragenlijst);
      for(let v = start; v < max; v++){
        slides[s].push(vragen[v]);

      }

    }

    
    return slides;
    
  }

  updateAntwoorden(vindex, waarde){


    this.antwoorden[vindex] = waarde;
    // console.log(this.antwoorden[0]);
    // debugger;
    let uitvoeren = 0;
    let antwoordTotaal = 0;
    for(let c = 0; c < this.antwoorden.length; c++){
      antwoordTotaal += this.antwoorden[c];
      // console.log(this.antwoorden[c]);
      // uitvoeren += this.antwoorden[c];
    }
      console.log('Totaal: ' + antwoordTotaal);
  }


}
