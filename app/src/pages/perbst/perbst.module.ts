import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerbstPage } from './perbst';

@NgModule({
  declarations: [
    PerbstPage,
  ],
  imports: [
    IonicPageModule.forChild(PerbstPage),
  ],
  entryComponents: [
  	PerbstPage
  ]
})
export class PerbstPageModule {}
