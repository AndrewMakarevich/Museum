export function masonry(columns = 3) {
    const gallery = document.querySelector('.gallery-columns');
    gallery.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    const galleryImgs = gallery.querySelectorAll('.gallery-image');
    let srcArray = [];
    galleryImgs.forEach(art => {
        srcArray = [...srcArray, art.src];
        art.remove();
    });
    srcArray = srcArray.sort(async function () {
        return await Math.random() - 0.5;
    });
    function createImg() {
        const img = document.createElement('img');
        img.classList.add('gallery-image');
        img.src = srcArray[0];
        srcArray.splice(0, 1);

        if (img.getBoundingClientRect().y < window.innerHeight - img.clientHeight / 2) {
            img.classList.add('visible-gallery-image');
        }

        window.addEventListener('scroll', () => {
            if (img.getBoundingClientRect().y < window.innerHeight - img.clientHeight / 2) {
                img.classList.add('visible-gallery-image');
            } else if (img.getBoundingClientRect().y > window.innerHeight) {
                img.classList.remove('visible-gallery-image');
            }
        });

        gallery.addEventListener('scroll', () => {
            if (img.getBoundingClientRect().y < window.innerHeight - img.clientHeight / 2) {
                img.classList.add('visible-gallery-image');
            } else if (img.getBoundingClientRect().y > window.innerHeight) {
                img.classList.remove('visible-gallery-image');
            }
        });
        return img;
    }

    let numberOfImgs = srcArray.length / columns;
    for (let i = 0; i < columns; i++) {
        const div = document.createElement('div');
        div.classList.add(`galleryColumn`);
        for (let x = 0; x < numberOfImgs; x++) {
            if (srcArray.length === 0) {
                break;
            }
            div.append(createImg());
        }
        gallery.append(div);
    }
    if (gallery.childNodes.length <= 2) {
        gallery.firstChild.classList.add('gallery-image-margin');
    } else {
        gallery.firstChild.classList.add('gallery-image-margin');
        gallery.lastChild.classList.add('gallery-image-margin');
    }


    // ADAPTIVITY

    let resizeTimeOut;

    function adaptGallery() {
        clearTimeout(resizeTimeOut);
        resizeTimeOut = setTimeout(() => {
            const galleryColumns = document.querySelectorAll('.galleryColumn');
            const galleryImgs = gallery.querySelectorAll('.gallery-image');
            galleryColumns.forEach(column => {
                column.remove();
            });
            galleryImgs.forEach(img => {
                gallery.append(img);
            });
            if (window.innerWidth < 769) {
                masonry(2);
            } else {
                masonry(3);
            }
        }, 1000);

    }

    window.addEventListener('resize', () => {
        adaptGallery();

    });
}