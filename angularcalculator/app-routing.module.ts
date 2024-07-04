import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { PercentCalculatorModule } from './percent-calculator/percent-calculator.module';

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
    canDeactivate: [
      (component: MyCalculatorComponent) => !component.canLeave
    ]
  },
  {
    path: '', redirectTo: 'calculator', pathMatch: 'full'
  },
  {
    path: 'percent-calculator',
    loadChildren: () => import('./percent-calculator/percent-calculator.module').then(m => m.PercentCalculatorModule)
  },
  { path: '', redirectTo: '/percent-calculator', pathMatch: 'full' 
},
  { path: 'percent-calculator', loadChildren: () => import('./percent-calculator/percent-calculator.module').then(m => m.PercentCalculatorModule) 
  },
  { path: 'permutationsandcomb', loadChildren: () => import('./Permutationsandcomb/Permutationsandcomb.module').then(m => m.PermutationsandcombModule) 
  },
  { path: '', redirectTo: '/permutationsandcomb', pathMatch: 'full' 
  },
  {
    path: '**',
    component: MyEmptyPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
