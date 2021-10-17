import { useContext } from 'react';
import { Context } from '../..';
import { activateBurgerMenu } from './burgerMenuScript';
import "./nav-bar.css";

import RightArrowSimple from '../../icons/navigation/rightArrowSimple';
import ContactsBar from './contactsBar';
const NavBar = () => {
    const { navBar } = useContext(Context);
    const { navBarMobile } = useContext(Context);
    return (
        <nav className="navBar">
            <div className="navBar__logo">
                {/* <img src={logo} alt="louvre-logo"></img> */}
                <h1 className="navBar__logo__header">Louvre</h1>
            </div>
            <div className="navBar__buttonsBlock">
                {
                    navBar.buttons.map((button, i) => {
                        return (
                            <article className="buttonsBlock__article" key={button.id}>
                                <button className="buttonsBlock-button"><a href={`#${button.text}`}>{button.text}</a></button>
                                <div className="buttonsBlock-mobileIcon">
                                    <RightArrowSimple />
                                </div>

                            </article>

                        )
                    })
                }
                <div className="navBar__mobileContent">
                    <section className="navBar__mobileContent-photos">
                        {
                            navBarMobile.pictures.map((picture, i) => {
                                return (
                                    <article className={i === 0 ? `photos__f` : `photos__s`} key={picture.id}>
                                        <img className="mobileContent-photos__photo" src={picture.url} alt=''></img>
                                    </article>
                                )
                            })
                        }
                    </section>
                    <div className="navBar__mobileContent-contacts">
                        <ContactsBar />
                    </div>
                </div>

            </div>
            <button onClick={(e) => activateBurgerMenu(e.target)} className="navBar__burger-icon">
                <span className="burger-icon__frstLine"></span>
                <span className="burger-icon__secLine"></span>
                <span className="burger-icon__thirdLine"></span>
            </button>
        </nav>
    )
};

export default NavBar;