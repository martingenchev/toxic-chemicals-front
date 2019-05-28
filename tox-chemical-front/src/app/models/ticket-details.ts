export class ticketDetails {
  id: number;
  warehouse_id: number;
  type: string;
  quantity: number;
  date: string ;
}

export class Incometickets {
  tickets: ticketDetails[];
}
