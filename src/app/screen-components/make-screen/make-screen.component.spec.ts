import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeScreenComponent } from './make-screen.component';

describe('MakeScreenComponent', () => {
  let component: MakeScreenComponent;
  let fixture: ComponentFixture<MakeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
