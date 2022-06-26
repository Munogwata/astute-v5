import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTabsComponent } from './plan-tabs.component';

describe('PlanTabsComponent', () => {
  let component: PlanTabsComponent;
  let fixture: ComponentFixture<PlanTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
