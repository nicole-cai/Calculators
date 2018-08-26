import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcyv1Component } from './calcyv1.component';

describe('Calcyv1Component', () => {
  let component: Calcyv1Component;
  let fixture: ComponentFixture<Calcyv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calcyv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calcyv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
