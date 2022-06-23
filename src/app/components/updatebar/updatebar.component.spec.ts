import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebarComponent } from './updatebar.component';

describe('UpdatebarComponent', () => {
  let component: UpdatebarComponent;
  let fixture: ComponentFixture<UpdatebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
