
import './App.css';

import { useContext, useState, useEffect } from 'react';
import { Context } from '.';

import NavBar from './components/nav-bar/nav-bar';
import Slider from './components/slider/slider';
import WelcomeBlock from './components/welcome-section-block/welcomeBlock';
import VirtualTour from './components/virtualTour-section/virtualTour-section';
import PictureExplore from './components/pictureExplore-section/pictureExplore';
import VideoJourney from './components/videoJourney-section/videoJourney-section';
import Gallery from './components/gallery-section/gallery-section.js';
import BuyTickets from './components/buyTickets-section/buyTickets-section';
import Parallax from './components/parallax-section/parallax-section';
import Contacts from './components/contacts-section/contacts-section';
import Footer from './components/footer-section/footer-section';
import TicketsModalWindow from './components/buyTickets-section/ticketsModalWindow/ticketsModalWindow';
import CustomAlert from './components/alertModal/customAlert';

function App() {

  const { ticketType } = useContext(Context);


  const [exhibitionType, setExhibitionType] = useState(0);
  const [exhibitionCoefficient, setExhibitionCoefficient] = useState(0);

  const [basicValue, setBasicValue] = useState(
    ticketType.tickets.map(ticket => {
      return { id: ticket.id, type: ticket.type, price: +ticket.price + ticket.price * +exhibitionCoefficient, amount: 0 };
    }
    )
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const setChangePrice = (id, amount) => {
    setBasicValue(basicValue.map(value => {
      if (value.id === id) {
        return value = { ...value, amount: amount < 0 ? 0 : amount }
      } else {
        return value;
      }
    }));
  };
  useEffect(() => {
    let sum = 0;
    basicValue.forEach(value => {
      sum = sum + (value.amount * value.price);
    });
    setTotalPrice(sum);
  }, [basicValue]);
  useEffect(() => {
    setBasicValue(basicValue.map((value, i) => {
      const price = ticketType.tickets[i].price;
      return value = { ...value, price: +price + price * +exhibitionCoefficient };
    }));
  }, [exhibitionCoefficient]);

  return (
    <div className="App">
      <CustomAlert />
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section className="welcome-section">
          <section className="welcome-section__container">
            <WelcomeBlock />
            <Slider />
          </section>
        </section>
        <section className="virtualTour-section">
          <VirtualTour />
        </section>
        <section className="pictureExplore-section">
          <PictureExplore />
        </section>
        <section className="videoJourney-section">
          <VideoJourney />
        </section>
        <section className="gallery-section">
          <Gallery />
        </section>
        <section className="buyTicketsSection">
          <TicketsModalWindow
            basicValue={basicValue}
            totalPrice={totalPrice}
            setChangePrice={setChangePrice}
            exhibitionType={exhibitionType}
            setExhibitionType={setExhibitionType}
            setExhibitionCoefficient={setExhibitionCoefficient} />
          <BuyTickets
            basicValue={basicValue}
            totalPrice={totalPrice}
            setChangePrice={setChangePrice}
            exhibitionType={exhibitionType}
            setExhibitionType={setExhibitionType}
            setExhibitionCoefficient={setExhibitionCoefficient} />
        </section>
        <section className="parallax-section">
          <Parallax />
        </section>
        <section className="contacts-section">
          <Contacts />
        </section>
      </main>
      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
