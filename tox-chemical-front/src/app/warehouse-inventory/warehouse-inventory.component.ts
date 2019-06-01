import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../services/warehouse.service';


@Component({
  selector: 'app-warehouse-inventory',
  templateUrl: './warehouse-inventory.component.html',
  styleUrls: ['./warehouse-inventory.component.css']
})
export class WarehouseInventoryComponent implements OnInit {

  constructor(private warehouseService: WarehouseService) { }
  WarehouseInventory;

  ngOnInit() {
    this.getCurrentInventoryStatus();
  }

  getCurrentInventoryStatus() {
    this.warehouseService.getWarehouseInventory().subscribe( data => {
      this.WarehouseInventory = data;
      console.log('test data', data);
    }, error => {
      console.log(error);
    });
  }
}
