export function sliderPreRedact() {
    const sliderBlock = document.querySelector('.slider');
    const arrowLeft = document.querySelector('.arrowLeft');
    const arrowRight = document.querySelector('.arrowRight');
    const scrollButtons = document.querySelectorAll('.scrollButtons button');
    const artArray = document.querySelectorAll('.slider-image');
    let srcArray = [];

    artArray.forEach(art => {
        art.remove();
        srcArray = [...srcArray, art.src];
    });

    let step = 0;
    let offset = 0;
    let reverseOffset = 1;

    function createImg(pos, id) {
        const img = document.createElement('img');
        img.src = srcArray[step];
        img.alt = '';
        img.id = id;
        img.className = 'slider-image';
        // ИММИТАЦИЯ СВАЙПА
        // На мобильных устройствах
        img.addEventListener("touchstart", (e) => {
            const currentPos = e.changedTouches[0].pageX;
            function calculateCurrentPos(e) {
                if (e.changedTouches[0].pageX - currentPos < -50) {
                    moveRight();
                    img.removeEventListener('touchmove', calculateCurrentPos);
                } else if (e.changedTouches[0].pageX - currentPos > 50) {
                    moveLeft();
                    img.removeEventListener('touchmove', calculateCurrentPos);
                }
            }
            img.addEventListener("touchmove", calculateCurrentPos);
        });
        // На компьютерах
        img.addEventListener('mousedown', (e) => {
            const currentPos = e.clientX;
            function calculateCurrentPos(e) {
                img.addEventListener('dragstart', (e) => {
                    e.preventDefault();
                });
                if (e.clientX - currentPos < -50) {
                    moveRight();
                    img.removeEventListener('mousemove', calculateCurrentPos);
                } else if (e.clientX - currentPos > 50) {
                    moveLeft();
                    img.removeEventListener('mousemove', calculateCurrentPos);
                }
            }
            img.addEventListener("mousemove", calculateCurrentPos);

        });
        // -------------------
        if (pos === 'before') {
            img.style.left = `-${sliderBlock.clientWidth * reverseOffset}px`;
            sliderBlock.prepend(img);

            if (step + 1 === srcArray.length) {
                step = 0;
                reverseOffset = 1;
            } else {
                step += 1;
                reverseOffset += 1;
            }
        } else {
            if (pos === 'after') {
                img.style.left = `${sliderBlock.clientWidth * offset + sliderBlock.clientWidth}px`;
            } else {
                img.style.left = `${sliderBlock.clientWidth * offset}px`;
            }
            sliderBlock.append(img);
            if (step + 1 === srcArray.length) {
                step = 0;
                offset = 0;
            } else {
                step += 1;
                offset += 1;
            }
        }


    }
    srcArray.forEach((src, i) => {
        createImg('', i);
    });

    let currentPosition = 0;
    function moveLeft() {
        currentPosition -= 1;

        if (currentPosition < 0) {
            currentPosition = artArray.length - 1;
            setTimeout(() => {
                for (let i = 0; i < artArray.length; i++) {
                    sliderBlock.lastChild.remove();
                }
            }, 300);

            srcArray.reverse().forEach((src, i) => {
                createImg('before', i);
            });
            srcArray.reverse();
        }
        const currArt = document.querySelectorAll('.slider-image');
        currArt.forEach((art, i) => {
            const left = art.style.left.split('px');
            art.style.left = `${+left[0] + sliderBlock.clientWidth}px`;
        });
        activateButton(currentPosition);

    }
    function moveRight() {
        currentPosition += 1;
        if (currentPosition > artArray.length - 1) {
            currentPosition = 0;
            setTimeout(() => {
                for (let i = 0; i < artArray.length; i++) {
                    sliderBlock.firstChild.remove();
                }
            }, 300);
            srcArray.forEach((src, i) => {
                createImg('after', i);
            });
        }
        const currArt = document.querySelectorAll('.slider-image');
        currArt.forEach((art, i) => {
            const left = art.style.left.split('px');
            art.style.left = `${+left[0] - sliderBlock.clientWidth}px`;
        });
        activateButton(currentPosition);
    }

    function activateButton(currentPosition) {
        scrollButtons.forEach((button, i) => {
            if (i === currentPosition) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }

        });
    }

    arrowRight.addEventListener('click', () => {
        moveRight();
        activateButton(currentPosition);
    });

    arrowLeft.addEventListener('click', () => {
        moveLeft();
        activateButton(currentPosition);
    });

    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pos = Number(button.classList[1]);
            if (pos < currentPosition) {
                while (currentPosition !== pos) {
                    moveLeft();
                    activateButton(currentPosition);
                }
            } else {
                while (currentPosition !== pos) {
                    moveRight();
                    activateButton(currentPosition);
                }
            }
        });
    });


    // Создание простейшей версии адаптивности

    let timeout;

    function adaptSlider() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const currImgs = sliderBlock.querySelectorAll('.slider-image');

            currImgs.forEach(img => {
                img.remove();
            });
            currentPosition = 0;
            activateButton(currentPosition);
            srcArray.forEach((img, i) => {
                createImg('', i);
            });
        }, 1000);
    }
    window.addEventListener('resize', adaptSlider);
}