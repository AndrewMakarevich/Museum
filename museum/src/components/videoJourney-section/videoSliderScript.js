export function videoSlider(amountOfVisibleElement = 3, setVideo) {
    const sliderBlock = document.querySelector(".videoSlider-block__slider"),
        pictureArray = document.querySelectorAll('.videoSlider-block__slider-picture'),
        rightArrow = document.querySelector('.videoSlider-rightArrow'),
        leftArrow = document.querySelector('.videoSlider-leftArrow');
    let srcArray = [];
    let idArray = [];
    pictureArray.forEach(picture => {
        srcArray = [...srcArray, picture.src];
        idArray = [...idArray, picture.id];
        picture.remove();
    });


    let step = 0;
    let offset = 1;
    let offsetAfter = amountOfVisibleElement;
    function createImg(pos) {
        const image = document.createElement('img');
        image.src = srcArray[step];
        image.classList.add('videoSlider-block__slider-picture');
        image.alt = '';
        image.id = idArray[step];

        const imageBlock = document.createElement('div');
        imageBlock.classList.add('slider-picture__block');
        imageBlock.style.width = `${(1 / amountOfVisibleElement) * 100}%`;
        imageBlock.append(image);

        // ИММИТАЦИЯ СВАЙПА

        imageBlock.addEventListener('touchstart', (e) => {
            const startPos = e.changedTouches[0].pageX;
            function calculateCurrentPos(e) {
                if (e.changedTouches[0].pageX - startPos < -50) {
                    moveRight();
                    imageBlock.removeEventListener('touchmove', calculateCurrentPos);
                } else if (e.changedTouches[0].pageX - startPos > 50) {
                    moveLeft();
                    imageBlock.removeEventListener('touchmove', calculateCurrentPos);
                }
            }
            imageBlock.addEventListener('touchmove', calculateCurrentPos);
        });

        imageBlock.addEventListener('mousedown', (e) => {
            const startPos = e.clientX;
            function calculateCurrentPos(e) {
                imageBlock.addEventListener('dragstart', (e) => {
                    e.preventDefault();
                });
                if (e.clientX - startPos < -50) {
                    moveRight();
                    imageBlock.removeEventListener('mousemove', calculateCurrentPos);
                } else if (e.clientX - startPos > 50) {
                    moveLeft();
                    imageBlock.removeEventListener('mousemove', calculateCurrentPos);
                }
            }
            imageBlock.addEventListener('mousemove', calculateCurrentPos);
        });

        if (pos === 'before') {
            imageBlock.style.left = `-${sliderBlock.clientWidth * (1 / amountOfVisibleElement) * offset}px`;
            sliderBlock.prepend(imageBlock);
            if (step + 1 === srcArray.length) {
                step = 0;
                offset = 1;
            } else {
                step += 1;
                offset += 1;
            }
        } else if (pos === 'after') {
            imageBlock.style.left = `${sliderBlock.clientWidth * (1 / amountOfVisibleElement) * offsetAfter}px`;
            sliderBlock.append(imageBlock);
            if (step + 1 === srcArray.length) {
                step = 0;
                offsetAfter = amountOfVisibleElement;
            } else {
                step += 1;
                offsetAfter += 1;
            }
        } else {
            imageBlock.style.left = `${sliderBlock.clientWidth * (1 / amountOfVisibleElement) * step}px`;
            sliderBlock.append(imageBlock);
            if (step + 1 === srcArray.length) {
                step = 0;
            } else {
                step += 1;
            }
        }

    }
    srcArray.forEach(img => {
        createImg();
    });
    sliderBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('videoSlider-block__slider-picture')) {
            setVideo(e.target.id);
        }
    });


    let position = 0;
    function moveRight() {
        position += 1;
        if (position > srcArray.length - 1) {
            position = 0;
        }
        const imgs = document.querySelectorAll('.slider-picture__block');
        imgs.forEach(img => {
            const left = img.style.left.split('px')[0];
            img.style.left = `${+left - sliderBlock.clientWidth * (1 / amountOfVisibleElement)}px`;
        });

        if (position === 1) {
            if (sliderBlock.childNodes.length > srcArray.length) {
                setTimeout(() => {
                    for (let i = 0; i < srcArray.length; i++) {
                        sliderBlock.firstChild.remove();
                    }
                }, 300);
            }
        }

        let appearenceAfter;
        for (let i = 0; i < imgs.length; i++) {
            if (+imgs[i].style.left.split('px')[0] >= sliderBlock.clientWidth) {
                appearenceAfter = true;
                break;
            } else {
                appearenceAfter = false;
                continue;
            }
        }
        if (!appearenceAfter) {
            srcArray.forEach(img => {
                createImg('after');
            });
        }
    };
    function moveLeft() {
        position -= 1;
        if (position < 0) {
            position = srcArray.length - 1;
        }
        const imgs = document.querySelectorAll('.slider-picture__block');
        imgs.forEach(img => {
            const left = img.style.left.split('px')[0];
            img.style.left = `${+left + sliderBlock.clientWidth * (1 / amountOfVisibleElement)}px`;
        });
        if (position === 1) {
            if (sliderBlock.childNodes.length > srcArray.length) {
                setTimeout(() => {
                    for (let i = 0; i < srcArray.length; i++) {
                        sliderBlock.lastChild.remove();
                    }
                }, 300);
            }

        }
        let appearenceBefore;
        for (let i = 0; i < srcArray.length; i++) {
            if (imgs[i].style.left.split('px')[0] < -1) {
                appearenceBefore = true;
                break;
            } else {
                appearenceBefore = false;
                continue;
            }
        }
        if (!appearenceBefore) {
            console.log('no el before');
            idArray.reverse();
            srcArray.reverse().forEach(img => {
                createImg('before');
            });
            idArray.reverse();
            srcArray.reverse();
        }
    }
    moveRight();

    rightArrow.addEventListener('click', () => {
        console.log('moveRight');
        moveRight();
    });
    leftArrow.addEventListener('click', () => {
        moveLeft();
    });

    let timeout;

    function adaptSlider() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            sliderBlock.querySelectorAll('.slider-picture__block').forEach(img => {
                img.remove();
            });
            position = 0;
            if (window.innerWidth <= 768) {
                amountOfVisibleElement = 2;
                offsetAfter = 2;
            } else {
                amountOfVisibleElement = 3;
                offsetAfter = 3;
            }

            srcArray.forEach((img, i) => {
                createImg();
            });
            moveRight();

        }, 1000);
    }
    window.addEventListener('resize', adaptSlider);

}