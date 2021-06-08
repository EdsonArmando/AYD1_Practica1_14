import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarestudianteComponent } from './agregarestudiante.component';

describe('AgregarestudianteComponent', () => {
  let component: AgregarestudianteComponent;
  let fixture: ComponentFixture<AgregarestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarestudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
