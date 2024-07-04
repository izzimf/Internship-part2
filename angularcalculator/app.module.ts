import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyNavigation } from './components/navigation/navigation.component';
import { PercentCalculatorComponent } from './percent-calculator/component/percent-calculator.component';
import { PermutationsandcombComponent } from './Permutationsandcomb/Permutationsandcomb.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage,
    PercentCalculatorComponent,
    PermutationsandcombComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
