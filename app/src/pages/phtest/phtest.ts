import { Component, ViewChild, ContentChild, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ProfielPage } from '../profiel/profiel';

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
  arrayTotaal: any;
  vragenlijst: Array<any>;
  // antwoordTotaal = 0;  waarom gaat dit fout



  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MockVraagProvider, public toastCtrl: ToastController, public nav: NavController) {
    service.findAll().then(data => {
      this.vragenlijst = data;
    });
  }

  ionViewDidLoad() {
    this.slides = this.createSliders();

  }


  createSliders() {
    let decimal = false;
    let aantalVragen = this.vragenlijst.length; 
    let vragenPerSlide = 6;
    let slides = new Array();
    debugger;
      // Controleer of i deelbaar is door vragenPerSlide en een geheel getal oplevert
      let uitkomst = (aantalVragen / vragenPerSlide);
      let aantalSlides = Math.ceil(uitkomst);
    
    for(let s = 0; s < aantalSlides; s++) {
      slides.push(new Array());

      let vragenlijst = new Array();
      // debugger;
      if(!('vragen' in slides[s])) {
        slides[s].vragen = [];
      }
      if(!('antwoorden' in slides[s])) {
        slides[s].antwoorden = [];
      }

      slides[s].vragen.push(vragenlijst);
      slides[s].antwoorden.push(vragenlijst);

      let start = s * vragenPerSlide;
      let max   = (s * vragenPerSlide) + vragenPerSlide;
      if(max > aantalVragen) {
        max = aantalVragen;
      }
      for(let v = start; v < max; v++) {
        slides[s].vragen.push(this.vragenlijst[v]);
        slides[s].antwoorden[v] = 0;
      }

    }
    
    return slides;
    
  }

  updateAntwoorden(sindex, vindex, waarde){

    this.slides[sindex].antwoorden[vindex] = waarde;
    // debugger;
   
  }


  checkProfiel(){
    let valueIsNul = false;
    let antwoordTotaal = 0;
    debugger;

    for(let s = 0; s < this.slides[s].length; s++){

        for(let a = 0; a < this.slides[s].antwoorden[a].length; a++) {

          if(this.slides[s].antwoorden[a] == 0){
            valueIsNul = true;
          }
          antwoordTotaal = antwoordTotaal + this.slides[s].antwoorden[a];
        }

    }
    // debugger;
    if(valueIsNul === true) {
      const toast = this.toastCtrl.create({
            message: 'Je heb nog niet alles ingevuld',
            showCloseButton: true,
            closeButtonText: 'Ok'
      });
      toast.present();
    }
    else {
      this.bepaalProfiel(antwoordTotaal);
      this.goToProfiel();
    }

  }


  bepaalProfiel(antwoordTotaal){
    
    if(antwoordTotaal > -180 && antwoordTotaal < -90) {
      console.log('Profiel 1');
    }
    else if (antwoordTotaal > -90 && antwoordTotaal < 0) {
      console.log('Profiel 2');
    }
    else if (antwoordTotaal > 0 && antwoordTotaal < 90) {
      console.log('Profiel 3');
    }
    else if (antwoordTotaal > 90 && antwoordTotaal < 180) {
      console.log('Profiel 4');
    }
  }

  goToProfiel(){
    this.nav.push(ProfielPage);
  }


}
