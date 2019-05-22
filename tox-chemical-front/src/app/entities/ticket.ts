export class Ticket {
    inOut: number;
    entries: Entry[];
}

export class Entry{
    type: number;
    quantity: number;
    warehouse: number;
}
