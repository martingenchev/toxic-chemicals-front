import { Injectable } from '@angular/core';
import { Ticket } from '../entities/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

    varTicket: Ticket= new Ticket();

  constructor() { }
 
}