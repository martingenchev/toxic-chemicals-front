import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';

export interface Type {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  stepOne: string = '';
  aChemicals=[];

  chemicals: FormArray;
  
  chemicalEntryForm = this.fb.group({
    type: ['', Validators.required],
    quantity: ['', Validators.required],
    chemicals: this.fb.array([ this.createItem() ])
  });

  types: Type[] = [
    {value: 0, viewValue: 'A'},
    {value: 1, viewValue: 'B'},
    {value: 2, viewValue: 'C'}
  ];

  constructor(private router: Router, private fb: FormBuilder, private ticketService: TicketService) { }

  ngOnInit() {
    if(this.ticketService.inOut === 0){
      this.stepOne="Arrival";
    } else if (this.ticketService.inOut === 1){
      this.stepOne="Dispatch";
    }
  }

  createItem(){
    return this.fb.group({
      type: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  addChemical(){
    console.log('adding chemical...', this.chemicalEntryForm.value);
    //this.aChemicals.push(this.chemicalEntryForm.value);
    //console.log('array', this.aChemicals);
  }
  addItem(): void {
    this.chemicals = this.chemicalEntryForm.get('chemicals') as FormArray;
    this.chemicals.push(this.createItem());
  }

  removeChemical(){
    console.log('removing chemical...');
  }

  onSubmit(){
    if (this.chemicalEntryForm.valid){
      this.ticketService.type = this.chemicalEntryForm.value.type;
      this.ticketService.quantity = this.chemicalEntryForm.value.quantity;
      this.ticketService.warehouse = 1;
      console.log("ticket", this.ticketService);

      this.router.navigate(['/gate/location']);
    }
  }

}
