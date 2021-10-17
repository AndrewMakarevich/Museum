export class VirtualTourStore {
    constructor() {
        this._virtualTourItem = [
            {
                "id": "0",
                "header": "royale palace",
                "picture": "https://img-fotki.yandex.ru/get/236239/34317700.131/0_d0988_aafc92b3_XXL.jpg",
                "link": "https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815"
            },
            {
                "id": "1",
                "header": "denon wing",
                "picture": "https://viewfinder.expedia.com/wp-content/uploads/2017/05/Louvre-Museum-in-Paris.jpg",
                "link": "https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500"
            },
            {
                "id": "2",
                "header": "colonnade perrault",
                "picture": "https://cdn.hikb.at/photos/osm/org/33574859461_5036400818_b.jpg",
                "link": "https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120"
            },
            {
                "id": "3",
                "header": "greek hall",
                "picture": "https://get.pxhere.com/photo/monument-statue-louvre-sculpture-art-french-sculpture-927543.jpg",
                "link": "https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736"
            },
            {
                "id": "4",
                "header": "mona lisa",
                "picture": "https://apwshop.com/upload/iblock/d18/_DSC0860.jpg",
                "link": "https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120"
            },
            {
                "id": "5",
                "header": "night palace",
                "picture": "https://i.ytimg.com/vi/GRAHNcfk0Yc/maxresdefault.jpg",
                "link": "https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652"
            }
        ];
    }
    get virtualTourItem() {
        return this._virtualTourItem;
    }
    set virtualTourItem(item) {
        this._virtualTourItem = item;
    }
}