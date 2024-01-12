import React from 'react';
import Header from '../Components/Header';
import Milukov from '../Components/Milukov';
import Main from '../Components/Main';
import Directions from '../Components/Directions';
import News from '../Components/News';
import School from '../Components/School';
import Footer from '../Components/Footer';

function MainPage() {
  return (
    <React.StrictMode>
      <Header />
      <Main/>
      <Milukov/>
      <Directions/>
      <News/>
      <School/>
      <Footer/>
  </React.StrictMode>
  );
}

export default MainPage;