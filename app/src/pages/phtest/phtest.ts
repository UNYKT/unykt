import { Component, ViewChild, ContentChild, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  arrayTotaal: any;
  // antwoordTotaal = 0;  waarom gaat dit fout



  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MockVraagProvider, public toastCtrl: ToastController) {
    service.findAll().then(data => {
      
      this.vragen = data;
    });
  }

  ionViewDidLoad() {
    this.slides = this.createSliders(this.vragen);

    for(let v = 0; v < this.vragen.length; v++){
      this.antwoorden.push(0);
    }

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
      let max   = (s * vragenPerSlide) + vragenPerSlide;
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


    this.antwoorden.push(waarde);
    
    let antwoordTotaal = 0;
    for(let c = 0; c < this.antwoorden.length; c++){
      this.arrayTotaal = antwoordTotaal += this.antwoorden[c];
     
    }
      console.log('Totaal: ' + antwoordTotaal);

  }


  checkProfiel(){
    let valueIsNul = false;

    for(let p = 0; p < this.antwoorden.length; p++) {
      if(this.antwoorden[p] == 0){
        valueIsNul = true;
      }
      else {
        valueIsNul = false;
      }
    }

    if(valueIsNul === true) {
      const toast = this.toastCtrl.create({
            message: 'Je heb nog niet alles ingevuld',
            showCloseButton: true,
            closeButtonText: 'Ok'
      });
      toast.present();
    }
    else {
      this.telAntwoorden();
    }

  }


  telAntwoorden(){
    
    if(this.arrayTotaal > -180 && this.arrayTotaal < -90) {
      console.log('Profiel 1');
    }
    else if (this.arrayTotaal > -90 && this.arrayTotaal < 0) {
      console.log('Profiel 2');
    }
    else if (this.arrayTotaal > 0 && this.arrayTotaal < 90) {
      console.log('Profiel 3');
    }
    else if (this.arrayTotaal > 90 && this.arrayTotaal < 180) {
      console.log('Profiel 4');
    }
  }


}
