import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPersonalizadasComponent } from './pipes-personalizadas.component';

describe('PipesPersonalizadasComponent', () => {
  let component: PipesPersonalizadasComponent;
  let fixture: ComponentFixture<PipesPersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPersonalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
