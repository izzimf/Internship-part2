import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesRouting } from './Permutationsandcomb-routings.module';
import { DirectivesPageComponent } from './Permutationsandcomb.component';



@NgModule({
  declarations: [DirectivesPageComponent, MyChangeColorDirectiveDirective, MyIfDirectiveDirective],
  imports: [
    CommonModule,
    DirectivesRouting
  ],
  exports: []
})
export class DirectivesModule { }
