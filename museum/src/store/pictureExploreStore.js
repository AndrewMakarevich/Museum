export class PictureExploreStore {
    constructor() {
        this._pictureContent = [
            {
                "id": "0",
                "header": "picture explore",
                "text": `
                Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.\n
                It was cleaned in 1984 to remove a "yellow veil" of dust that had gathered since the previous restoration in the 19th century.\n
                The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.
                `,
                "picture": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/explore-slider/before.jpg",
                "altPicture": "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/explore-slider/after.jpg"
            },
            //             {
            //                 "id": "1",
            //                 "header": "picture explore",
            //                 "text": `
            //                 Condition: Paint loss and active flaking exposed the bare wood support. There was a discolored varnish layer and surface grime.

            // Treatment: Areas of loss and flaking paint were infused with adhesive to prevent further loss. Discolored varnish and grime were removed with the appropriate solvents. Paint losses were filled and inpainted.

            // John Ritto Penniman, Christ Tempted by the Devil, 1818
            //                 `,
            //                 "picture": "https://s3.amazonaws.com/assets.saam.media/files/styles/max_650x650/s3/2017-09/lunder_before_penniman.jpg?itok=qhmWfrLV",
            //                 "altPicture": "https://s3.amazonaws.com/assets.saam.media/files/styles/max_650x650/s3/2017-09/lunder_after_penniman.jpg?itok=RThK_fmv"
            //             }
        ];
    }
    get pictureContent() {
        return this._pictureContent;
    }
    set pictureContent(content) {
        this._pictureContent = content;
    }
}