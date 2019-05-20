export class Ticket {
    id: string;
    date: Date;
    inOut: number;
    entries: Entry[];
}

export class Entry{
    type: number;
    quantity: number;
    warehouse: number;
}
