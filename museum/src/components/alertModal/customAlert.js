import './customAlert.css';
const CustomAlert = () => {
    return (
        <div className="custom-alert__background">
            <section className="custom-alert__form">
                <div className="custom-alert__form-text">
                    {/* ALERT! */}
                </div>
                <button className="accept-button">ok</button>
            </section>
        </div>
    )
};
export default CustomAlert;