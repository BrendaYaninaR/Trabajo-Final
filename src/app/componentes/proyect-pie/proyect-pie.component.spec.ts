import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectPieComponent } from './proyect-pie.component';

describe('ProyectPieComponent', () => {
  let component: ProyectPieComponent;
  let fixture: ComponentFixture<ProyectPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
