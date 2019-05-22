import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';

export interface Direction {
  value: number;
  viewValue: string;
}

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

  ticketForm: FormGroup;
  chemicals: FormArray;

  directions: Direction[] = [
    {value: 0, viewValue: 'Arrival'},
    {value: 1, viewValue: 'Dispatch'}
  ];

  types: Type[] = [
    {value: 0, viewValue: 'A'},
    {value: 1, viewValue: 'B'},
    {value: 2, viewValue: 'C'}
  ];

  constructor(private router: Router, private fb: FormBuilder, private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketForm = this.fb.group({
      inOut: ['', Validators.required],
      chemicals: this.fb.array([ this.createItem() ])
    });

    this.chemicals = this.ticketForm.get('chemicals') as FormArray;
  }

  createItem(): FormGroup{
    return this.fb.group({
      type: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }
  addItem(): void {
    this.chemicals.push(this.createItem());
  }

  removeItem(): void{
    this.chemicals.removeAt(this.chemicals.length-1);
  }

  onSubmit(){

    if (this.ticketForm.valid){
      this.ticketService.varTicket.inOut = this.ticketForm.value.inOut;
      this.ticketService.varTicket.entries = this.chemicals.value;
      console.log("ticket", this.ticketService);

      this.router.navigate(['/gate/location']);
    }
  }

}
