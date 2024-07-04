import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permutationscomb',
  templateUrl: './permutationscomb.component.html',
  styleUrls: ['./permutationscomb.component.scss']
})
export class PermutationscombComponent {

  public calcForm: FormGroup;
  public result: number | null = null;

  constructor(private fb: FormBuilder) {
    this.calcForm = this.fb.group({
      n: [null, [Validators.required, Validators.min(0)]],
      r: [null, [Validators.required, Validators.min(0)]],
      type: ['permutation', Validators.required]
    });
  }

  public calculate(): void {
    const n = this.calcForm.value.n;
    const r = this.calcForm.value.r;
    const type = this.calcForm.value.type;

    if (type === 'permutation') {
      this.result = this.factorial(n) / this.factorial(n - r);
    } else {
      this.result = this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    }
  }

  private factorial(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * this.factorial(num - 1);
  }
}
