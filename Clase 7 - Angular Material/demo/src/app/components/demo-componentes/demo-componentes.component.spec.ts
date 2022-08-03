import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentesComponent } from './demo-componentes.component';

describe('DemoComponentesComponent', () => {
  let component: DemoComponentesComponent;
  let fixture: ComponentFixture<DemoComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
