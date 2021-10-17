export class TicketModalWindowStore {
    constructor() {
        this._inputs = [
            {
                "id": '0',
                "type": 'date',
                "inputSample": 'date',
                "placeholder": "Date"
            },
            {
                "id": '1',
                "type": 'time',
                "inputSample": 'time',
                "placeholder": "Time"
            },
            {
                "id": '2',
                "type": 'text',
                "inputSample": 'user',
                "placeholder": "Name"
            },
            {
                "id": '3',
                "type": 'email',
                "inputSample": 'email',
                "placeholder": "E-mail"
            },
            {
                "id": '4',
                "type": 'tel',
                "inputSample": 'tel',
                "placeholder": "Phone"
            },
        ];
        this._selections = [
            {
                "id": "0",
                "placeholder": "exhibition type",
                "type": "ticket",
                "selection": [
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
                ]
            },
        ];
    }
    get inputs() {
        return this._inputs;
    }
    set inputs(inputs) {
        this.inputs = inputs;
    }

    get selections() {
        return this._selections;
    }
    set selections(selections) {
        this._selections = selections;
    }
}