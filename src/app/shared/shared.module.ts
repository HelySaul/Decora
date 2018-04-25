import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
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
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule
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
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class SharedModule {
}
