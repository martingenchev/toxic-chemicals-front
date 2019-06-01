export class Ticket {
    inOut: number;
    entries: Entry[];
}

export class Entry{
    type: string;
    quantity: number;
    warehouse_id: number;
}
