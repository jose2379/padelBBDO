import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasJuegoComponent } from './normas-juego.component';

describe('NormasJuegoComponent', () => {
  let component: NormasJuegoComponent;
  let fixture: ComponentFixture<NormasJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormasJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
