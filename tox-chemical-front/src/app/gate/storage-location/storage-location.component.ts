import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {
  stepOne: string = '';
  type: string = '';
  direction: string ='';

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    if(this.ticketService.ticket.inOut === 0){
      this.stepOne="Arrival";
      this.direction="TO";
    } else if (this.ticketService.ticket.inOut === 1){
      this.stepOne="Dispatch";
      this.direction="FROM";
    }

    if(this.ticketService.ticket.type === 0){
      this.type="A";
    } else if (this.ticketService.ticket.type === 1){
      this.type="B";
    } else if (this.ticketService.ticket.type === 2){
      this.type="C";
    }
  }

}
