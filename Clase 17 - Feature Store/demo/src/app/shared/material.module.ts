import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
