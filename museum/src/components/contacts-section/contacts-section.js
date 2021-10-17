import './contacts-section.css';
const Contacts = () => {
    return (
        <div className="contacts-container">
            <a name="Contacts"></a>
            <h2 className="contacts-container__header">contacts</h2>
            <section className="contacts-container__mainBlock">

                <div className="contacts-container__mainBlock-info">
                    <h3 className="contacts-infoHeader">Palais Royal Musee du Louvre</h3>
                    <ul className="contacts-infoList">
                        <li className="contacts-infoItem">

                            address: 75001 Paris, France
                        </li>
                        <li className="contacts-infoItem">
                            <a href="tel:+33(0) 1 40 20 50 50">phone: +33(0) 1 40 20 50 50</a>
                        </li>
                        <li className="contacts-infoItem">
                            <a href="mailto:info@louvre.fr">mail: info@louvre.fr</a>
                        </li>
                    </ul>
                </div>

                <div className="contacts-container__imgBlock">
                    <iframe
                        title="Louvre Google map"
                        className="contacts-container__mainBlock-img"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1dEime_4HJxQI4xhZW-BZUiHU6NDQDCBA" >
                    </iframe>
                </div>
            </section>
        </div>
    )
};
export default Contacts;