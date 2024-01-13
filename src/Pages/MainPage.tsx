import React, { FC } from 'react';

import Header from '../Components/Header';
import Main from '../Components/Main';
import Milukov from '../Components/Milukov';
import Directions from '../Components/Directions'
import News from '../Components/News'
import School from '../Components/School'
import Footer from '../Components/Footer'
import '../App.css';


const MainPage: FC = () => {
 

    return (
        <div>
            <Header />
            <Main />
            <Milukov />
            <Directions />
            <News />
            <School />
            <Footer />
        </div>
        
    );
  }
  
  export default MainPage;