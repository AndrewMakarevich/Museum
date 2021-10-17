export class GalleryStore {
    constructor() {
        this._firstColumn = [
            {
                "id": "0",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery1.jpg"
            },
            {
                "id": "1",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery2.jpg"
            },
            {
                "id": "2",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery3.jpg"
            },
            {
                "id": "3",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery4.jpg"
            },
            {
                "id": "4",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery5.jpg"
            },
            {
                "id": "5",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery6.jpg"
            },
            {
                "id": "6",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery7.jpg"
            },
            {
                "id": "7",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery8.jpg"
            },
            {
                "id": "8",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery9.jpg"
            },
            {
                "id": "9",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery10.jpg"
            },
            {
                "id": "10",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery11.jpg"
            },
            {
                "id": "11",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery12.jpg"
            },
            {
                "id": "12",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery13.jpg"
            },
            {
                "id": "13",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery14.jpg"
            },
            {
                "id": "14",
                "url": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/galery/galery15.jpg"
            }

        ];
        this._secondColumn = [

        ];
        this._thirdColumn = [

        ];
    }
    get firstColumn() {
        return this._firstColumn;
    }
    get secondColumn() {
        return this._secondColumn;
    }
    get thirdColumn() {
        return this._thirdColumn;
    }

    set firstColumn(column) {
        this._firstColumn(column);
    }
    set secondColumn(column) {
        this._secondColumn(column);
    }
    set thirdColumn(column) {
        this._thirdColumn(column);
    }
}