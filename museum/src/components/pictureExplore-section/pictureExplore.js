import { useContext, useEffect } from "react";
import { Context } from "../..";
import { explorePicture } from "./exploreScript";
import "./pictureExplore.css";

const PictureExplore = () => {
    const { pictureExplore } = useContext(Context);
    useEffect(() => {
        explorePicture("pictureExplore__container__picture", "beforePicture-block", "afterPicture-block", "resizeButton");
    }, []);
    return (
        <div className="pictureExplore__container">
            <a name="Explore"></a>
            {
                pictureExplore.pictureContent.map(content => {
                    return (
                        <section className="pictureExplore__container-item" key={content.id}>
                            <section className="pictureExplore__container__text">
                                <h2 className="pictureExplore__container__textHeader">{content.header}</h2>
                                <div className="pictureExplore__container__textInfo">{content.text}</div>

                            </section>
                            <section className="pictureExplore__container__picture">
                                <div className="beforePicture-block">
                                    <img className="pictureExplore__picture" src={content.picture} alt="" />
                                    <div className="afterPicture-block">
                                        <span className="resizeButton"></span>
                                        <img className="pictureExplore__altPicture" src={content.altPicture} alt="" />
                                    </div>
                                </div>



                            </section>
                        </section>
                    )
                })
            }
        </div>
    )
};
export default PictureExplore;