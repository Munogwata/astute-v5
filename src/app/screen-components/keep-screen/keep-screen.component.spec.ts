import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepScreenComponent } from './keep-screen.component';

describe('KeepScreenComponent', () => {
  let component: KeepScreenComponent;
  let fixture: ComponentFixture<KeepScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
