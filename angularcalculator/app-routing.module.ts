import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { PercentCalculatorModule } from './percent-calculator/percent-calculator.module';
import { PermutationsandcombModule } from './permutations-comb/permutations-comb.module'; 

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
    canDeactivate: [
      (component: MyCalculatorComponent) => !component.canLeave
    ]
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'percent-calculator',
    loadChildren: () => import('./percent-calculator/percent-calculator.module').then(m => m.PercentCalculatorModule)
  },
  {
    path: 'permutations-comb',
    loadChildren: () => import('./permutations-comb/permutations-comb.module').then(m => m.PermutationscombModule)
  },
  {
    path: '**',
    component: MyEmptyPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PercentCalculatorModule,
    PermutationsandcombModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
