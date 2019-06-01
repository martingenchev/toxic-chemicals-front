import { Injectable } from '@angular/core';
import { Ticket , Entry } from '../entities/ticket';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
    baseURL = 'http://localhost:3000/api' ;
    varTicket: Ticket = new Ticket();

  constructor(private http: HttpClient) { }

  checkForSpace(ticket: Entry[]): Observable<Entry[]> {
    console.log('observable', ticket);
    return this.http.post<Entry[]>(this.baseURL + '/check-warehouse' , ticket)
      .pipe(catchError(this.handleError));
  }

  createTicket(ticket: Entry[]): Observable<Entry[]>{
    console.log('create ticket', ticket);
    return this.http.post<Entry[]>(this.baseURL + '/create-ticket', ticket)
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
