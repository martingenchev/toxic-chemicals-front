export class Ticket {
    inOut: number;
    entries: Entry[];
}

export class Entry {
  constructor(public  chemicalType: string, public quantity: number ) {}
}
export class GeneratedTicket {
  constructor(public  chemicalType: string, public quantity: number , public warehouse_id: number) {}
}
