import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs/';
import {tickets, ticketDetails} from '../models/ticket-details';
import {catchError} from 'rxjs/operators';

@Injectable()

export class WarehouseService {

  constructor(private  http: HttpClient ) { }
  baseURL = 'http://localhost:3000/api' ;

  getAll(): Observable<any> {
    return this.http.get(this.baseURL + '/get-income-tickets');
  }

  AddItemsToInventory(ticket: ticketDetails): Observable<ticketDetails[]> {
    return this.http.post<ticketDetails[]>(this.baseURL + '/update-warehouse-inventory', ticket)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
