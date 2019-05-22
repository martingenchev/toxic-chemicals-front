import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
    
  }

  ticketbtn(){
    //console.log("btn clicked");
    this.ticketService.tickets.push(this.ticketService.varTicket);
    this.router.navigate(['/pending']);  }

}