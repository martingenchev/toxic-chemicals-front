import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../services/warehouse.service';
import {MatTableDataSource, MatSortModule } from '@angular/material';
import {tickets, ticketDetails} from '../models/ticket-details';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(private  warehouseServices: WarehouseService) { }
  ActiveIncomeTicket = [];
  displayedColumns: string[] = ['warehouse_id', 'type', 'quantity', 'date', 'actions'];
  incomeAndOutcome: string[] = ['warehouse_id', 'type', 'quantity', 'date', 'actions'];
  dataSources = new MatTableDataSource(this.ActiveIncomeTicket);

  ngOnInit() {
    this.getAllIncomeActiveTickets();
    console.log('ticket', tickets);
  }

  getAllIncomeActiveTickets() {
        this.warehouseServices.getAll().subscribe( data => {
          this.ActiveIncomeTicket = [...data];
         console.log(data);
        } , error1 =>  {
          console.log(error1);
        });
      }

  UpdateWarehouse(ticketDetails) {
    console.log(ticketDetails);
    this.warehouseServices.AddItemsToInventory(ticketDetails).subscribe(response => {
      console.log('si', response , ticketDetails);
      //TODO Add a toast service for feedback
    }, error => {
      console.log('error' , error);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSources.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSources);
  }
}
