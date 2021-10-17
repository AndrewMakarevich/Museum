export class TicketStore {
    constructor() {
        this._tickets = [
            {
                "id": "0",
                "type": "Basic 18+",
                "price": "20"
            },
            {
                "id": "1",
                "type": "Senior 65+",
                "price": "10"
            }

        ];
        this._ticketTypes = [
            {
                "id": "0",
                "value": "Permanent exhibition",
                "coefficient": "0"
            },
            {
                "id": "1",
                "value": "Temporary exhibition",
                "coefficient": "0.25"
            },
            {
                "id": "2",
                "value": "Combined Admission",
                "coefficient": "1"
            }
        ];
    }
    get tickets() {
        return this._tickets;
    }
    get ticketTypes() {
        return this._ticketTypes;
    }
    set tickets(tickets) {
        this._tickets = tickets;
    }
    set ticketTypes(types) {
        this._ticketTypes = types;
    }
}