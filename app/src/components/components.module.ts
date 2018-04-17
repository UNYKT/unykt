import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider';
import { VraagComponent } from './vraag/vraag';
import { RangeComponent } from './range/range';
@NgModule({
	declarations: [SliderComponent,
    VraagComponent,
    RangeComponent],
	imports: [],
	exports: [SliderComponent,
    VraagComponent,
    RangeComponent]
})
export class ComponentsModule {}
