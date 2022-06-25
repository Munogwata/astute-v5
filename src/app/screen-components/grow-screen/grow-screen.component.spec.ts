import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowScreenComponent } from './grow-screen.component';

describe('GrowScreenComponent', () => {
  let component: GrowScreenComponent;
  let fixture: ComponentFixture<GrowScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
