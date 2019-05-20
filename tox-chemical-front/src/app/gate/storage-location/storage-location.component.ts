import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {
  stepOne: string = '';
  quantity: number;
  type: string = '';
  direction: string ='';
  warehouse: number;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    if(this.ticketService.inOut === 0){
      this.stepOne="Arrival";
      this.direction="TO";
    } else if (this.ticketService.inOut === 1){
      this.stepOne="Dispatch";
      this.direction="FROM";
    }

    this.quantity=this.ticketService.quantity;

    if(this.ticketService.type === 0){
      this.type="A";
    } else if (this.ticketService.type === 1){
      this.type="B";
    } else if (this.ticketService.type === 2){
      this.type="C";
    }

    this.warehouse=this.ticketService.warehouse;
  }

  ticketbtn(){
    console.log("btn clicked");
  }

}
