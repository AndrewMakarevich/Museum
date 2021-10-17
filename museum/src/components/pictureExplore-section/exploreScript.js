export function explorePicture(pictureContainerClass, beforePictureClass, afterPictureClass, resizeButtonClass) {
    const pictureContainer = document.querySelectorAll(`.${pictureContainerClass}`);
    const beforePictures = document.querySelectorAll(`.${beforePictureClass}`);

    beforePictures.forEach(picture => {
        picture.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });



    pictureContainer.forEach(container => {
        const afterPicture = container.querySelector(`.${afterPictureClass}`);
        const resizeButton = container.querySelector(`.${resizeButtonClass}`);



        // COMPUTER VERSION

        resizeButton.addEventListener('mousedown', (e) => {

            afterPicture.addEventListener('dragstart', (e) => {
                e.preventDefault();
            });

            function startResizing(e) {
                const targetCoords = container.getBoundingClientRect();
                const xCoord = e.clientX - targetCoords.left;
                let percent = 100 - ((xCoord / targetCoords.width) * 100);
                if (percent >= 100) {
                    afterPicture.style.width = `100%`;
                } else afterPicture.style.width = `${percent}%`;
            }

            container.addEventListener('mousemove', startResizing);
            afterPicture.addEventListener('mouseup', () => {
                container.removeEventListener('mousemove', startResizing);
            });
        });

        // MOBILE VERSION

        resizeButton.addEventListener('touchstart', () => {

            function startResizing(e) {
                const targetCoords = container.getBoundingClientRect();
                const xCoord = e.changedTouches[0].pageX - targetCoords.left;
                let percent = 100 - ((xCoord / targetCoords.width) * 100);
                if (percent >= 100) {
                    afterPicture.style.width = `100%`;
                } else afterPicture.style.width = `${percent}%`;
            }

            container.addEventListener('touchmove', startResizing);
            afterPicture.addEventListener('touchend', () => {
                container.removeEventListener('touchmove', startResizing);
            });
        });

    });




}