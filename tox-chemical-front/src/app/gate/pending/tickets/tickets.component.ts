import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/entities/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @Input() ticketInput: Ticket;
 @Output() ticketClicked: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit() {
  }
  onTicketClick(ticket: Ticket) {
    this.ticketClicked.emit(ticket);
  }

}
