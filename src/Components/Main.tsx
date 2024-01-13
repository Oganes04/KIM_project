import React, { FC } from 'react';

import '../App.css';


const Main: FC = () => {
 

    return (
        <section className="main">
		    <div className="container">
			    <div className="main_wrapper">
				    <div className="main_description">
					    <div className="main_description-header">
						    <h1>Кафедра компьютерной инженерии и моделирования</h1>
					    </div>
					    <div className="main_description-text">
						    <p>Физико-технический институт <br />Крымского федерального университета имени В.И. Вернадского</p>
					    </div>
					    <button className="main_description-btn">Узнать больше</button>
				    </div>
				    <div className="main_animation">
					    <img src="img/animation.gif" alt="Анимация"></img>
				    </div>
			    </div>
		    </div>
	    </section>
    );
  }
  
  export default Main;