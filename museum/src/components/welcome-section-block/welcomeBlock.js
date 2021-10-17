import './welcomeBlock.css';

const header = "WELCOME\n TO THE LOUVRE";

const WelcomeBlock = () => {
    return (
        <div className="welcome-section__block">
            <div className="welcome-section__header">
                <h1>
                    {header}
                </h1>
                <h2>
                    From the castle to the museum
                </h2>
                <a href="https://www.louvre.fr/en"><button className="welcome-section__discoverBtn">Discover the Louvre</button></a>
            </div>
        </div>
    )
};
export default WelcomeBlock;