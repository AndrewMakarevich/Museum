export class VideoJourneyStore {
    constructor() {
        this._pictures = [
            {
                "id": "0",
                "posterUrl": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/video/poster0.jpg",
                "videoUrl": "https://www.youtube.com/embed/zp1BXPX8jcU"
            },
            {
                "id": "1",
                "posterUrl": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/video/poster1.jpg",
                "videoUrl": "https://www.youtube.com/embed/Vi5D6FKhRmo"
            },
            {
                "id": "2",
                "posterUrl": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/video/poster2.jpg",
                "videoUrl": "https://www.youtube.com/embed/NOhDysLnTvY"
            },
            {
                "id": "3",
                "posterUrl": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/video/poster3.jpg",
                "videoUrl": "https://www.youtube.com/embed/aWmJ5DgyWPI"
            },
            {
                "id": "4",
                "posterUrl": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/video/poster4.jpg",
                "videoUrl": "https://www.youtube.com/embed/2OR0OCr6uRE"
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