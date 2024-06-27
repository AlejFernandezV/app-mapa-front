import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marker } from '../../models/Marker.interface';

@Component({
  selector: 'app-edit-marker-modal',
  templateUrl: './edit-marker-modal.component.html',
  styleUrl: './edit-marker-modal.component.css'
})
export class EditMarkerModalComponent implements OnInit{

  markerToEdit: any;

  markerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditMarkerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.markerForm = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.markerForm.valid) {
      const formValue = this.markerForm.value;
      this.dialogRef.close({
        ...this.data,
        title: formValue.title,
        description: formValue.description
      });
    }
  }
}
