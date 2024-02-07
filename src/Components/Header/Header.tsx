import React, { FC, useState, useEffect } from 'react';
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import { Link } from 'react-router-dom';
import './Header.css'


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
		<>
        <header className="header">
		    <div className="container">
			    <nav className={`nav ${isOpen ? 'open' : ''}`}> {/* open  */}
				    <div className={`nav_wrapper ${isOpen ? 'open' : ''}`}>
						<Link to="/" className="nav_item">Главная</Link>
						<Link to="/schedule" className="nav_item">Расписание</Link>
						<Link to="/events" className="nav_item">Мероприятия</Link>
						<Link to="/cooperation" className="nav_item">Сотрудничество</Link>
						<Link to="/testing-system" className="nav_item">Тестирующая система</Link>
						<Link to="/news" className="nav_item">Новости</Link>
						<Link to="/department" className="nav_item">Кафедра</Link>
						<Link to="/students" className="nav_item">Студентам</Link>
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
		<ScrollArrow /></>
    );
  }
  
  export default Header;