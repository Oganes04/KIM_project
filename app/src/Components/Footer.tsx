import React from 'react';


function Footer() {
  return (
    <footer className="footer">
        <div className="container">
        	<div className="footer_wrapper">
        		<div className="footer_header"><h2>Контакты</h2></div>
        		<div className="footer_mail">
        			<div className="footer_icon"><img src={require('../img/Vector.svg')} alt="Иконка почты"/></div>
          				
           			 <p className="footer_text">compingenering@cfuv.ru</p>
        		</div>

       			<div className="footer_location">
       				<div className="footer_icon"><img src={require('../img/mdi_location.svg')} alt="Иконка локации"/></div>
            		<p className="footer_text">295007, Республика Крым, г. Симферополь, пр. Вернадского, 4 Тврическая академия КФУ им. В. И. Вернадского, кабинет 310А</p>
       			</div>
        
        		<div className="footer_images">
            		<img src={require("../img/Cfu_icon.png")} alt="Лого КФУ" className="footer_img"/>
            		<img src={require("../img/FTI_icon.png")} alt="Лого ФТИ" className="footer_img"/>
            		<img src={require("../img/Kim_icon.png")} alt="Лого КИМ" className="footer_img"/>
        		</div>
        	</div>
        </div>
    </footer>
  );
}

export default Footer;