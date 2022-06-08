import '../style/App.scss';
import React from 'react';
import Header from './main/Header';
import MainLogo from './main/MainLogo';
import FacilitiesBlock from './main/FacilitiesBlock';
import CityBlock from './main/CityBlock';
import Resort from './main/Resort';
import Relaxing from './main/Relaxing';
import Woman from './main/Woman';
import Footer from './main/Footer';

function App() {
  return (
    <div className="App">
      <section className="App__first">
        <Header />
        <MainLogo />
        <FacilitiesBlock />
        <CityBlock />
        <Resort />
        <Relaxing />
      </section>

      <section className="App__middle">
        <Woman />
      </section>

      <section className="App__bottom">
        <Footer />
      </section>
    </div>
  );
}

export default App;
