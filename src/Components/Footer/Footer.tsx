import React, { FC } from 'react';

import './Footer.css';


const Footer: FC = () => {
 

    return (
        <footer className="footer">
        <div className="container">
        	<div className="footer_wrapper">
        		<div className="footer_header"><h2>Контакты</h2></div>
        		<div className="footer_mail">
        			<div className="footer_icon"><img src="./img/Vector.svg" alt="Иконка почты" /></div>
          				
           			 <p className="footer_text">compingenering@cfuv.ru</p>
        		</div>

       			<div className="footer_location">
       				<div className="footer_icon"><img src="./img/mdi_location.svg" alt="Иконка локации" /></div>
            		<p className="footer_text">
            			<span>295007, Республика Крым, г. Симферополь, пр. Вернадского, 4</span>
            			<span> Тврическая академия КФУ им. В. И. Вернадского, кабинет 310А</span>
            		</p>
       			</div>
        
        		<div className="footer_images">
        			<div className="footer_img">
        				<img src="./img/Cfu_icon.png" alt="Лого КФУ" />
        			</div>
        			<div className="footer_img">
        				<img src="./img/FTI_icon.png" alt="Лого ФТИ" />
        			</div>
        			<div className="footer_img">
        				<img src="./img/Kim_icon.png" alt="Лого КИМ" />
        			</div>
        		</div>
        	</div>
        </div>
    </footer>
    );
  }
  
  export default Footer;