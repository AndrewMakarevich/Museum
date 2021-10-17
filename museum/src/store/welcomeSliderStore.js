export class WelcomeSliderStore {
    constructor() {
        this._pictures = [
            {
                "id": "0",
                "art": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/welcome-slider/1.jpg"
            },
            {
                "id": "1",
                "art": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/welcome-slider/2.jpg"
            },
            {
                "id": "2",
                "art": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/welcome-slider/3.jpg"
            },
            {
                "id": "3",
                "art": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/welcome-slider/4.jpg"
            },
            {
                "id": "4",
                "art": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/welcome-slider/5.jpg"
            }

        ];
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(pictures) {
        this._pictures = pictures;
    }
}