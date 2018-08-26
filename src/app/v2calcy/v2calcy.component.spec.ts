import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2calcyComponent } from './v2calcy.component';

describe('V2calcyComponent', () => {
  let component: V2calcyComponent;
  let fixture: ComponentFixture<V2calcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2calcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2calcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
