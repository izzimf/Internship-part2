import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PercentCalculatorComponent } from './percent-calculator.component';
import { PercentCalculatorRoutingModule } from './percent-calculator-routing.module';

@NgModule({
  declarations: [PercentCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, PercentCalculatorRoutingModule],
})
export class PercentCalculatorModule { }
