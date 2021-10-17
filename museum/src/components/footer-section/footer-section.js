
import { useContext } from 'react';
import { Context } from '../..';
import ContactsBar from '../nav-bar/contactsBar';
import './footer-section.css';

const Footer = () => {
    const { navBar } = useContext(Context);
    return (
        <div className="footer-container">
            <nav className="footer__firstLine">
                <section className="footer-logo">
                    <h2 className="navBar__logo__header">Louvre</h2>
                </section>
                <div className="footerLinks-section">
                    <section className="footer-links">
                        {
                            navBar.buttons.map(button => {
                                return (
                                    <button className="footer-links__button" key={button.id}><a href={`#${button.text}`}>{button.text}</a></button>
                                )
                            })
                        }
                    </section>
                    <section className="footer-contacts">
                        <ContactsBar />
                    </section>
                </div>
            </nav>
            <div className="footer__secLine">
                <div>© 2021</div>
                <div className="rollingScopesLinks"><a className="footer-link" href="https://rs.school/js/">The Rolling Scopes School</a></div>
                <div><a className="footer-link" href="https://github.com/AndrewMakarevich">Andrew Makarevich</a></div>
            </div>

        </div>
    )
};
export default Footer;