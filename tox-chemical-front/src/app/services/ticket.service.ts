import { Injectable } from '@angular/core';


@Injectable()
export class TicketService {
  constructor() { }


  ticket = {
    date: '',
    inOut: 0,
    type: 0,
    quantity: 0,
    warehouse: 1
  };


}
