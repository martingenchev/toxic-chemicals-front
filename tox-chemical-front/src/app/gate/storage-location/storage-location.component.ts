import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Entry } from 'src/app/entities/ticket';
import {Router} from '@angular/router';


@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {


  constructor(private ticketService: TicketService, private  router: Router) { }
  entries: Entry[] = this.ticketService.varTicket.entries;
  stepOne: number = this.ticketService.varTicket.inOut;

  ngOnInit() {

  }

  ticketbtn() {
    console.log('ticket service', this.ticketService.varTicket.entries);
    console.log('entries', this.entries);
    this.ticketService.createTicket(this.entries).subscribe(resolve => {
      // TODO feedback for client user to see if it succesful; or not
      console.log(resolve);
        this.router.navigate(['/gate']);
    }, error => {
      console.log('eroor in subscribe create ticket', error);
    });
  }

}
