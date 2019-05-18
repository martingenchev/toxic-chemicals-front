import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
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
  
  chemicalEntryForm = this.fb.group({
    type: ['', Validators.required],
    quantity: ['', Validators.required]
  });

  types: Type[] = [
    {value: 0, viewValue: 'A'},
    {value: 1, viewValue: 'B'},
    {value: 2, viewValue: 'C'}
  ];

  constructor(private router: Router, private fb: FormBuilder, private ticketService: TicketService) { }

  ngOnInit() {
    if(this.ticketService.ticket.inOut === 0){
      this.stepOne="Arrival";
    } else if (this.ticketService.ticket.inOut === 1){
      this.stepOne="Dispatch";
    }
  }

  onSubmit(){
    if (this.chemicalEntryForm.valid){
      this.ticketService.ticket.type = this.chemicalEntryForm.value.type;
      this.ticketService.ticket.quantity = this.chemicalEntryForm.value.quantity;
      console.log("ticket", this.ticketService.ticket);

      this.router.navigate(['/gate/location']);
    }
  }

}
