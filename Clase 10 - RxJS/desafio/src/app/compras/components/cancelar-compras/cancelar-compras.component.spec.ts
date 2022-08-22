import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarComprasComponent } from './cancelar-compras.component';

describe('CancelarComprasComponent', () => {
  let component: CancelarComprasComponent;
  let fixture: ComponentFixture<CancelarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
