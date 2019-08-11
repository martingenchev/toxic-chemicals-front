import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import {Entry, GeneratedTicket} from 'src/app/entities/ticket';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as WarehouseAction from './store/warehouse.actions';

@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {
  entries: Entry[] = this.ticketService.varTicket.entries;
  // for pipes getting the the number if in or out
  stepOne: number = this.ticketService.varTicket.inOut;
  tickets: Observable<{tickets: GeneratedTicket[]}>;

  constructor(private ticketService: TicketService,
              private  router: Router,
              private store: Store<{availabilityList: {tickets: GeneratedTicket[]}}>) { }

  ngOnInit() {
 this.tickets = this.store.select('availabilityList');
  }

  ticketbtn() {
    console.log('ticket service', this.ticketService.varTicket.entries);
    console.log('entries', this.entries);
    let ticketEntry = [...this.entries]
   // this.store.dispatch(new WarehouseAction.GenerateTicket(ticketEntry))
    this.ticketService.createTicket(this.entries).subscribe(resolve => {
      // TODO feedback for client user to see if it succesful; or not
      console.log(resolve);
        this.router.navigate(['/gate']);
    }, error => {
      console.log('eroor in subscribe create ticket', error);
    });
  }

}
