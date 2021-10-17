export class NavBarStore {
    constructor() {
        this._logo = {
            'src': ''
        };
        this._buttons = [
            {
                "id": "0",
                "text": "Visiting",
            },
            {
                "id": "1",
                "text": "Explore"
            },
            {
                "id": "2",
                "text": "Video"
            },
            {
                "id": "3",
                "text": "Gallery"
            },
            {
                "id": "4",
                "text": "Tickets"
            },
            {
                "id": "5",
                "text": "Contacts"
            },
        ];
    }
    get logo() {
        return this._logo;
    }
    get buttons() {
        return this._buttons;
    }

    set logo(logo) {
        this._logo = logo;
    }
    set buttons(buttons) {
        this._buttons = buttons;
    }
}
