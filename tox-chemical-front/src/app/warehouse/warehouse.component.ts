import { Component, OnInit  } from '@angular/core';
import {WarehouseService} from '../services/warehouse.service';
import {MatTableDataSource, MatSortModule } from '@angular/material';
import { ticketDetails} from '../models/ticket-details';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {GeneratedTicket} from "../entities/ticket";
import {Store} from '@ngrx/store';
import * as AvailabilityActions from '../gate/availability/store/availavility.actions';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(
    private  warehouseServices: WarehouseService ,
    private router: Router,
    private store: Store<{warehouseList: {tickets: GeneratedTicket[]}}>
  ) {  this.dataSources.filterPredicate = this.tableFilter(); }

  displayedColumns: string[] = ['warehouse_id', 'type', 'quantity', 'date', 'actions'];
  incomeAndOutcome: string[] = ['warehouse_id', 'type', 'quantity', 'date', 'actions'];
  dataSources = new MatTableDataSource() ;
  filteredID;
  //observable for the reducer
  tickets: Observable<{tickets: GeneratedTicket[]}>;

  idFilter = new FormControl();
  ngOnInit() {
    this.tickets = this.store.select('warehouseList');
    this.getAllIncomeActiveTickets();
    this.idFilter.valueChanges.subscribe(id => {
      this.filteredID = id;
      this.dataSources.filter = JSON.stringify(this.filteredID);
    });


    console.log('ticket', this.warehouseServices.incomeTickets);
  }

  getAllIncomeActiveTickets() {
    this.warehouseServices.getAll().subscribe( data => {
     // this.ActiveIncomeTicket = [...data];
      this.warehouseServices.incomeTickets.tickets = data;
      // datasource.data is option from material to add mattTable data source
      this.dataSources.data = this.warehouseServices.incomeTickets.tickets;

     // this.dataSources = new  MatTableDataSource(this.warehouseServices.incomeTickets.tickets);
      console.log('ticket details', this.dataSources.data );
    } , error1 =>  {
      console.log(error1);
    });
  }
// it is used tofilter the data from the table
  tableFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function(data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return  data.warehouse_id.toString().toLowerCase().indexOf(searchTerms) !== -1;
    };
    return filterFunction;
  }

  UpdateWarehouse(ticket) {
    console.log(ticket);
    this.warehouseServices.AddItemsToInventory(ticket).subscribe(response => {
      console.log('si', response );

      let deleteTicketRedux = this.dataSources.data.indexOf(ticket);
      this.store.dispatch(new AvailabilityActions.DeleteTicket(deleteTicketRedux));
      // TODO Add a toast service for feedback
      this.router.navigate(['/warehouse-inventory']);
    }, error => {
      console.log('error' , error);
    });
  }


}
