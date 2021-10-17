import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavBarStore } from './store/navBarStore';
import { WelcomeSliderStore } from './store/welcomeSliderStore';
import { NavBarMobContStore } from './store/navBarMobContStore';
import { VirtualTourStore } from './store/virtualTourStore';
import { PictureExploreStore } from './store/pictureExploreStore';
import { VideoJourneyStore } from './store/videoJourneyStore';
import { GalleryStore } from './store/galleryStore';
import { TicketModalWindowStore } from './store/ticketModaWindowStore';
import { TicketStore } from './store/ticketStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    'navBar': new NavBarStore(),
    'welcomeSlider': new WelcomeSliderStore(),
    'navBarMobile': new NavBarMobContStore(),
    'virtualTour': new VirtualTourStore(),
    'pictureExplore': new PictureExploreStore(),
    'videoJourney': new VideoJourneyStore(),
    'gallery': new GalleryStore(),
    'ticketModal': new TicketModalWindowStore(),
    'ticketType': new TicketStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
