import {Action} from '@ngrx/store';
import { GeneratedTicket} from '../../../entities/ticket';

import * as WarehouseActions from './warehouse.actions';

const initialState = {
  tickets: [
    new GeneratedTicket('A', 1, 2),
    new GeneratedTicket('B', 2, 3 )
  ]
};

export function WarehouseReducer(state = initialState, action: WarehouseActions.WarehouseListActions) {

  switch (action.type) {
    case  WarehouseActions.GENERATE_TICKET:
      return{
        ...state,
        tickets: [...state.tickets, ...action.payload]
      };
    default:
      return state;
  }
}
