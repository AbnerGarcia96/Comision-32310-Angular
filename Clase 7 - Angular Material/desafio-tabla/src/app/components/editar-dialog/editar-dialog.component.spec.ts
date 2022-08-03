import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDialogComponent } from './editar-dialog.component';

describe('EditarDialogComponent', () => {
  let component: EditarDialogComponent;
  let fixture: ComponentFixture<EditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
