import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class SharedModule { }
