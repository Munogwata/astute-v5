import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyScreenComponent } from './money-screen.component';

describe('MoneyScreenComponent', () => {
  let component: MoneyScreenComponent;
  let fixture: ComponentFixture<MoneyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
