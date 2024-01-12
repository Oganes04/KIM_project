import React from 'react';

function Header() {
  return (
    <header className="header">
		<div className="container">
			<nav className="nav">
				<a href="#" className="nav_item">Главная</a>
        		<a href="#" className="nav_item">Расписание</a>
        		<a href="#" className="nav_item">Мероприятия</a>
        		<a href="#" className="nav_item">Сотрудничество</a>
        		<a href="#" className="nav_item">Тестирующая система</a>
        		<a href="#" className="nav_item">Новости</a>
        		<a href="#" className="nav_item">Кафедра</a>
        		<a href="#" className="nav_item">Студентам</a>
			</nav>
		</div>
	</header>
  );
}

export default Header;
