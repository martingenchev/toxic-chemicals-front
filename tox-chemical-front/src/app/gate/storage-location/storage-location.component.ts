import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Entry } from 'src/app/entities/ticket';


@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {
  entries: Entry[] = this.ticketService.varTicket.entries;
  stepOne: number = this.ticketService.varTicket.inOut;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    
  }

  ticketbtn(){
    console.log("btn clicked");
  }

}