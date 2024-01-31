import React, { FC } from 'react';

import './Directions.css';


const Directions: FC = () => {
 

    return (
        <section className="directions">
		    <div className="container">
			    <div className="directions_wrapper">
				    <div className="directions_header"><h2>Направления подготовки</h2></div>
				    <div className="directions_items">
					    <div className="directions_item">
						    <div className="gradient1-layer1"></div>
                		    <div className="gradient1-layer2"></div>
                		    <p className="directions_item-course">Бакалавриат</p>
                		    <p className="directions_item-code">09.03.01</p>
                		    <p className="directions_item-name">Информатика и вычислительная техника</p>
					    </div>
					    <div className="directions_item">
						    <div className="gradient2-layer1"></div>
                		    <div className="gradient2-layer2"></div>
                		    <div className="gradient2-layer3"></div>
                		    <div className="gradient2-layer4"></div>
                		    <p className="directions_item-course">Бакалавриат</p>
                		    <p className="directions_item-code">09.03.04</p>
                		    <p className="directions_item-name">Программная инженерия</p>
					    </div>
					    <div className="directions_item">
						    <div className="gradient3-layer1"></div>
                		    <div className="gradient3-layer2"></div>
                		    <div className="gradient3-layer3"></div>
                		    <p className="directions_item-course">Магистратура</p>
                		    <p className="directions_item-code">09.03.01</p>
                		    <p className="directions_item-name">Информатика и вычислительная техника</p>	
					    </div>
				    </div>	
			    </div>
		    </div>
	    </section>
    );
  }
  
  export default Directions;