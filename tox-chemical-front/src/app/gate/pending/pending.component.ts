import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from '../../entities/ticket';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  tickets: Ticket[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.tickets;
  }

  onTicketClicked(ticket) {
    console.log(ticket);
  }

}
