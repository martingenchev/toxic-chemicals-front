import {Action} from '@ngrx/store';
import { GeneratedTicket} from '../../../entities/ticket';

export const GENERATE_TICKET = 'GENERATE_TICKET';

export class GenerateTicket implements  Action {
  readonly type = GENERATE_TICKET;
  constructor(public payload: GeneratedTicket[]) {}
}

export type WarehouseListActions = GenerateTicket ;
