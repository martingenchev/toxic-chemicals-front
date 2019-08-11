import {Entry, GeneratedTicket} from '../../../entities/ticket';

import * as AvailabilityActions from './availavility.actions';
import * as WarehouseActions from '../../storage-location/store/warehouse.actions';
import {AvailabilityListActions} from "./availavility.actions";

const initialState = {
  pending: [],
  tickets: []
};
export function availabilityReducer(state = initialState, action: AvailabilityActions.AvailabilityListActions) {

  switch (action.type) {

    case AvailabilityActions.CHECK_SPACE:
      console.log(action.payload);
      return{
        ...state,
        pending: [ ...state.pending , ...action.payload]
      };
    case  AvailabilityActions.GENERATE_TICKET:
      console.log('state', state);
      return{
        ...state,
        tickets: [...state.tickets, ...action.payload]
      };
    case AvailabilityActions.DELETE_TICKET:
      console.log(state, action.payload);
      return {
        ...state,
        tickets: state.tickets.filter((ig , igIndex ) => {
        return igIndex !== action.payload;
        })
      };
    default:
      console.log('state', state)
      return state;
  }
}
