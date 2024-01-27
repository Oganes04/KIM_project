import React, { FC } from 'react';

import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Milukov from '../Components/Milukov/Milukov';
import Directions from '../Components/Directions/Directions'
import News from '../Components/News/News'
import School from '../Components/School/School'
import Footer from '../Components/Footer/Footer'
import '../App.css';


const MainPage: FC = () => {
 

    return (
        <div>
            <Header/>
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