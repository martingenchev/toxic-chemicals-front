import {Action} from '@ngrx/store';
import {Entry, GeneratedTicket} from '../../../entities/ticket';

export const CHECK_SPACE = 'CHECK_SPACE';
export const GENERATE_TICKET = 'GENERATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';

export class CheckSpace implements  Action {
  readonly type = CHECK_SPACE;
  constructor(public payload: Entry[]) {}
}

export class GenerateTicket implements  Action {
  readonly type = GENERATE_TICKET;
  constructor(public payload: GeneratedTicket[]) {}
}
export class DeleteTicket implements  Action {
  readonly  type = DELETE_TICKET;
  constructor(public payload: number) {}
}
export type AvailabilityListActions = CheckSpace | GenerateTicket | DeleteTicket ;
