import { Youtube } from '../../icons/youtube';
import { Instagram } from '../../icons/instagram';
import { Facebook } from '../../icons/facebook';
import { Twitter } from '../../icons/twitter';
import { Pinterest } from '../../icons/pineterest';

const ContactsBar = () => {
    const youTubeLink = 'https://www.youtube.com/user/louvre';
    const instagramLink = 'https://www.instagram.com/museelouvre/?hl=ru';
    const facebookLink = 'https://www.facebook.com/museedulouvre/';
    const twitterLink = 'https://twitter.com/MuseeLouvre?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
    const pinterestLink = 'https://www.pinterest.fr/museedulouvre/_created/';

    return (
        <section className="contacts">
            <a href={youTubeLink}>
                <button className="contacts-icon">

                    <Youtube />
                </button>
            </a>
            <a href={instagramLink}>
                <button className="contacts-icon">

                    <Instagram />
                </button>
            </a>
            <a href={facebookLink}>
                <button className="contacts-icon">

                    <Facebook />
                </button>
            </a>
            <a href={twitterLink}>
                <button className="contacts-icon">

                    <Twitter />
                </button>
            </a>
            <a href={pinterestLink}>
                <button className="contacts-icon">

                    <Pinterest />
                </button>
            </a>

        </section>
    )
}
export default ContactsBar;