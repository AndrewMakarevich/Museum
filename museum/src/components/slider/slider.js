import { useEffect, useContext } from 'react';
import { Context } from '../..';
import './slider.css';


import { sliderPreRedact } from './sliderScript';

const Slider = () => {
    const { welcomeSlider } = useContext(Context);
    useEffect(() => {
        sliderPreRedact();
    }, []);
    return (
        <div className="slider-block">
            <div className="slider">
                {
                    welcomeSlider.pictures.map(picture => {
                        return (
                            <img className="slider-image" src={picture.art} alt="" key={picture.id} />
                        )
                    })
                }
            </div>

            <section className="slider-buttons">
                <div className='scrollButtons'>
                    {
                        welcomeSlider.pictures.map((picture, i) => {
                            return (
                                i === 0 ?
                                    <button className={`scrollButtons__button ${i} active`} key={picture.id}></button>
                                    :
                                    <button className={`scrollButtons__button ${i}`} key={picture.id}></button>
                            )
                        })
                    }
                </div>
                <div className='arrowButtons'>
                    <button className="arrowLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="arrowLeft-icon" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                    </button>
                    <button className="arrowRight">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="arrowRight-icon" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

            </section>

        </div>


    )
};

export default Slider;