import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCardsComponent } from './screen-cards.component';

describe('ScreenCardsComponent', () => {
  let component: ScreenCardsComponent;
  let fixture: ComponentFixture<ScreenCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
