import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CustomDialogComponent>
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize('300px', '400px');
    this.form = this.formBuilder.group({
      name: ''
    })
  }

  submit(form) {
    this.dialogRef.close(`${form.value.name}`);
  }

}
