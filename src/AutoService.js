import React from 'react';
import Header from './Components/Header/Header';
import FourUslugi from './Components/FourUslugi/FourUslugi';
import IntroPrice from './Components/IntroPrice/IntroPrice';
import WhoIs from './Components/WhoIs/WhoIs';
import Carousel from './Components/Carousel/Carousel';
import Price from './Components/UslugiNashi/Price';
import Team from './Components/Team/Team';
import Akcsii from './Components/Akcsii/Akcsii';
import LastForm from './Components/LastForm/LastForm';
import Otzivi from './Components/Otzivi/Otzivi';
import Footer from './Components/Footer/footer';


const AutoService = () => {
  return (
    <>
      <Header/>
      <FourUslugi/>
      <IntroPrice/>
      <WhoIs/>
      <Carousel/>
      <Price/>
      <Team/>
      <Akcsii/>
      <LastForm/>
      <Otzivi/>
      <Footer/>
    </>
  );
};

export default AutoService;