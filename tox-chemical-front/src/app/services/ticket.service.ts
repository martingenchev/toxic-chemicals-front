import { Injectable } from '@angular/core';
import { Ticket } from '../entities/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  varTicket: Ticket= new Ticket();
  
  tickets: Ticket[] = [
    {
      inOut: 0,
      entries: [
        {
          type: 1,
          quantity: 45,
          warehouse: 2
        },
        {
          type: 2,
          quantity: 23,
          warehouse: 1
        }
      ]
    },
    {
      inOut: 1,
      entries: [
        {
          type: 0,
          quantity: 34,
          warehouse: 2
        },
        {
          type: 1,
          quantity: 90,
          warehouse: 2
        }
      ]
    }
  ];

  constructor() { }
 
}