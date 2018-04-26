import {Component, EventEmitter, Inject, NgModule} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-signinmodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})

export class DeletemodalComponent {

  onDelete = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DeletemodalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onSim(): void {
    this.onDelete.emit();
    this.dialogRef.close();
  }

  onNao(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class DeletemodalModule {
}
