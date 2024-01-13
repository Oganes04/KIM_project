import React, { FC, useState, useEffect } from 'react';

import '../App.css';


const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isOpen]);

    const toggleClass = () => {
     setIsOpen(!isOpen);
    };
 

    return (

        <header className="header">
		    <div className="container">
			    <nav className={`nav ${isOpen ? 'open' : ''}`}> {/* open  */}
				    <div className={`nav_wrapper ${isOpen ? 'open' : ''}`}>
					    <a href="#" className="nav_item">Главная</a>
        			    <a href="#" className="nav_item">Расписание</a>
        			    <a href="#" className="nav_item">Мероприятия</a>
        			    <a href="#" className="nav_item">Сотрудничество</a>
        			    <a href="#" className="nav_item">Тестирующая система</a>
        			    <a href="#" className="nav_item">Новости</a>
        			    <a href="#" className="nav_item">Кафедра</a>
        			    <a href="#" className="nav_item">Студентам</a>
				    </div>
			    </nav>

			    <nav className="nav_burger" onClick={toggleClass}>
				    <nav className="nav_burger-header">Главная</nav>
				    <div className={`burger_menu ${isOpen ? 'open' : ''}`} id="burger_menu"> {/* open  */}
					    <span></span>
    				    <span></span>
    				    <span></span>
    				    <span></span>
				    </div>
			    </nav>
		    </div>
	    </header>
    );
  }
  
  export default Header;