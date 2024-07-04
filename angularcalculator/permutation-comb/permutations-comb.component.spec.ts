import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationsCombComponent } from './permutations-comb.component';

describe('PermutationsCombComponent', () => {
  let component: PermutationsCombComponent;
  let fixture: ComponentFixture<PermutationsCombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermutationsCombComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermutationsCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
