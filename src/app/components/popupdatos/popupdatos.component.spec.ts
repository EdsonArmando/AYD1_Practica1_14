import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupdatosComponent } from './popupdatos.component';

describe('PopupdatosComponent', () => {
  let component: PopupdatosComponent;
  let fixture: ComponentFixture<PopupdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupdatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
