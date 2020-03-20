import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendartryComponent } from './calendartry.component';

describe('CalendartryComponent', () => {
  let component: CalendartryComponent;
  let fixture: ComponentFixture<CalendartryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendartryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendartryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
