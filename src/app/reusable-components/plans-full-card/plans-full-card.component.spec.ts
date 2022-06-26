import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFullCardComponent } from './plans-full-card.component';

describe('PlansFullCardComponent', () => {
  let component: PlansFullCardComponent;
  let fixture: ComponentFixture<PlansFullCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansFullCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
