import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
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
    MatExpansionModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule
  ],
  declarations: []
})
export class SharedModule { }
