import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticket = {
    date: '',
    inOut: 0,
    type: 0,
    quantity: 0,
    warehouse: 1
  };

  constructor() { }
}
