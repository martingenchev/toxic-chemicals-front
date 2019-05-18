import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';

export interface Type {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-new-in-out',
  templateUrl: './new-in-out.component.html',
  styleUrls: ['./new-in-out.component.css']
})
export class NewInOutComponent implements OnInit {
  ticketForm = this.fb.group({
    date: ['', Validators.required],
    inOut: ['', Validators.required]
  });

  types: Type[] = [
    {value: 0, viewValue: 'Arrival'},
    {value: 1, viewValue: 'Dispatch'}
  ];

  constructor(private fb: FormBuilder, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log("ticketForm", this.ticketForm.value);
    if (this.ticketForm.valid) {
      this.ticketService.ticket.date = this.ticketForm.value.date;
      this.ticketService.ticket.inOut = this.ticketForm.value.inOut;

      //console.log("ticketService", this.ticketService.ticket);
      this.router.navigate(['/gate/availability']);
    }
  }

}
