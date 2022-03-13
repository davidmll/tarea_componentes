import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombresPaisesComponent } from './nombres-paises.component';

describe('NombresPaisesComponent', () => {
  let component: NombresPaisesComponent;
  let fixture: ComponentFixture<NombresPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombresPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombresPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
