import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsComponent } from './template-forms.component';

describe('TemplateFormsComponent', () => {
  let component: TemplateFormsComponent;
  let fixture: ComponentFixture<TemplateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
