import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFullPlanComponent } from './debt-full-plan.component';

describe('DebtFullPlanComponent', () => {
  let component: DebtFullPlanComponent;
  let fixture: ComponentFixture<DebtFullPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtFullPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtFullPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
