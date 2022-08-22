import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
