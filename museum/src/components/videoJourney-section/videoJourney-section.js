import { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import './videoJourney-section.css';

import { videoSlider } from './videoSliderScript';

const VideoJourney = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/zp1BXPX8jcU");
    function setVideo(url) {
        setCurrentVideo(url);
    }
    useEffect(() => {
        if (window.innerWidth > 768) {
            videoSlider(3, setVideo);
            return;
        } else {
            videoSlider(2, setVideo);
            return;
        }

    }, []);
    const text = "Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code";
    const { videoJourney } = useContext(Context);
    return (
        <div className="videoJourney__container">
            <a name="Video"></a>
            <section className="videoJourney__container-headerCont">
                <h2 className="videoJourney-header" >video journey</h2>
                <div className="videoJourney-text">{text}</div>
            </section>
            <iframe className="video-block" src={currentVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <section className="videoSlider-block">
                <div className="videoSlider-block__slider">
                    {
                        videoJourney.pictures.map(picture => {
                            return (
                                <div className="slider-picture__block" key={picture.id}>
                                    <img id={picture.videoUrl} className="videoSlider-block__slider-picture" src={picture.posterUrl} alt="" key={picture.id} />
                                </div>

                            )
                        })
                    }
                </div>
                <div className="videoSlider-block__buttons">
                    <button className="videoSlider-leftArrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="videoSlider-arrowLeft-icon" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                    </button>
                    <div>
                        {/* {
                            videoJourney.pictures.map((picture,i) => {
                                return(
                                    <button>{i}</button>
                                )
                            })
                        } */}
                    </div>
                    <button className="videoSlider-rightArrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="videoSlider-arrowRight-icon" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
};
export default VideoJourney;