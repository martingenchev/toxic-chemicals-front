import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  chemicalEntryForm = this.fb.group({
    type: ['', Validators.required],
    quantity: ['', Validators.required]
  });

  types: Type[] = [
    {value: '0', viewValue: 'A'},
    {value: '1', viewValue: 'B'},
    {value: '2', viewValue: 'C'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("chemicalEntryForm", this.chemicalEntryForm.value);
  }

}
