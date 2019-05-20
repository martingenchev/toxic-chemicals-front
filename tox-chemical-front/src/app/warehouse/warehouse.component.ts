import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
 ActiveIncomeTicket = [];
  prop: any;
  displayedColumns: string[] = ['warehouse_id', 'type', 'quantity', 'date', 'actions'];
  incomeAndOutcome: string;
  constructor(private  warehouseServices: WarehouseService) { }

  ngOnInit() {
    this.getAllIncomeActiveTickets();
  }

  getAllIncomeActiveTickets() {
        this.warehouseServices.getAll().subscribe( data => {
         this.ActiveIncomeTicket = [] = data;
         console.log(data);
        } , error1 =>  {
          console.log(error1);
        });
      }
}
