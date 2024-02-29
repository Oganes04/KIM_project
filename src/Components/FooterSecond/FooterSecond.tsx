import React, { FC } from 'react';
import './FooterSecond.css';

const FooterSecond: FC = () => {
    return (
        <>
            <footer className="footer-second">
                <div className="container">
                    <div className="wrapper">
                        <div className="contacts">
                            <span className="contacts__title"><strong>Кафедра компьютерной<br />инженерии и моделирования</strong></span>
                            <div className="contacts__mail">
                                <img src="img/mail.svg" alt="Mail Icon" />
                                <a href="mailto:compingenering@cfuv.ru" className="email">compingenering@cfuv.ru</a>
                            </div>
                            <div className="contacts__address">
                                <img src="img/map-pin.svg" alt="Map Pin Icon" />
                                <a href="https://yandex.ru/maps/146/simferopol/house/prospekt_akademika_vernadskogo_4/Z00YdwRkT0EFQFpufXVyd3hkbQ==/?ll=34.134642%2C44.936479&z=16.7">
                                    <p>295007, Республика Крым, г. Симферополь, пр. Вернадского,  4</p>
                                    <p>Таврическая академия КФУ им. В. И. Вернадского, кабинет  310А</p>
                                </a>
                            </div>
                        </div>
                        <div className="logo-list">
                            <a href="https://cfuv.ru/">
                                <img src="img/logo-cfuv.png" alt="Logo CFUV" />
                            </a>
                            <a href="https://phystech.cfuv.ru/">
                                <img src="img/logo-fti.png" alt="Logo FTI" />
                            </a>
                            <a href="#">
                                <img src="img/logo-kim.png" alt="Logo KIM" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterSecond;