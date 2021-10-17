import { useContext } from "react";
import { Context } from "../..";
import './virtualTourSection.css';

const VirtualTour = () => {
    const underHeaderContent = "360° Virtual Tour\n Google Street Panorama View"
    const { virtualTour } = useContext(Context);
    return (
        <div className="virtualTour-container">
            <h2 className="virtualTour-container__header">VIRTUAL TOUR</h2>
            <a name="Visiting"></a>
            <section className="virtualTour-container__list">
                {
                    virtualTour.virtualTourItem.map(item => {
                        return (
                            <article className="virtualTour-container__item" key={item.id}>
                                <div className="virtualTour-container__item-imgContainer">
                                    <a href={item.link}><img className="virtualTour-container__item-img" src={item.picture} alt=""></img></a>
                                </div>
                                <h3 className="virtualTour-container__item-header">{item.header}</h3>
                                <div className="virtualTour-container__item-text">{underHeaderContent}</div>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
};
export default VirtualTour;