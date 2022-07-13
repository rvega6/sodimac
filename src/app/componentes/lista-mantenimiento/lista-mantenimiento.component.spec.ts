import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMantenimientoComponent } from './lista-mantenimiento.component';

describe('ListaMantenimientoComponent', () => {
  let component: ListaMantenimientoComponent;
  let fixture: ComponentFixture<ListaMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
