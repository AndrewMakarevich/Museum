export class NavBarMobContStore {
    constructor() {
        this._pictures = [
            {
                "id": "0",
                "url": "https://api-www.louvre.fr/sites/default/files/2021-02/palais-du-louvre-cour-napoleon.jpg"
            },
            {
                "id": "1",
                "url": "https://www.cosmopolitan.co.id/newtest/vrgallery/teaser/rsz_89476745_2834326416794317_1189105234229117514_n_42_20200331182639p4xmGl.jpg"
            },
            {
                "id": "2",
                "url": "https://pbs.twimg.com/media/ENP0zJUUUAAjrvf.jpg"
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