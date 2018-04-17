import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider';
import { VraagComponent } from './vraag/vraag';
@NgModule({
	declarations: [SliderComponent,
    VraagComponent],
	imports: [],
	exports: [SliderComponent,
    VraagComponent]
})
export class ComponentsModule {}
