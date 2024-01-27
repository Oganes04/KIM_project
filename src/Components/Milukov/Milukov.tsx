import React, { FC } from 'react';

import './Milukov.css';


const Milukov: FC = () => {
 

    return (
        <section className="milukov">
		    <div className="container">
			    <div className="milukov_wrapper">
				    <img src="./img/milyukov.png" alt="Милюков Виктор Васильевич" className="milukov_img" />
				    <div className="milukov_description">
					    <h2>Заведующий кафедрой</h2>
					    <h3>Милюков Виктор Васильевич</h3>
                	    <p>кандидат технических наук, доцент</p>
				    </div>
			    </div>
		    </div>
	</section>
    );
  }
  
  export default Milukov;