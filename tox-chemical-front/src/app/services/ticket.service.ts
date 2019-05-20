import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
    date: Date;
    inOut: number;
    type: number;
    quantity: number;
    warehouse: number;

  constructor() { }
}