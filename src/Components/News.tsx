import React, { FC } from 'react';

import '../App.css';


const News: FC = () => {
 

    return (
        <section className="news">
            <div className="container">
                <div className="news_wrapper">
               	    <div className="news_wrapper-header"><h2>Новости</h2></div>
               	    <div className="news_list">
                	    <div className="news_list-item">
                		    <div className="title">
                                <div className="title__head">
                                    Кафедра стала участником академической программы ООО «СВД ВС»
                                </div>
                                <div className="details">
                            	    <div className="details__date">19.05.2023</div>
                            	    <div className="details__theme">css_news</div>
                        	    </div>   
                            </div>
                            <div className="title__description">
	                            Кафедра компьютерной инженерии и моделирования Физико-технического института Крымского федерального университета им. В.И. Вернадского стала участником академической программы ООО «СВД ВС», в рамках которой получила современное российское программное обеспечение, которое позволит готовить квалифицированных специалистов в области технологий реального времени и встраиваемых систем уже с сентября этого года.
                            </div>
                            <div className="details_adaptive">
                                <div className="details__date">19.05.2023</div>
                                <div className="details__theme">css_news</div>
                            </div>
                	    </div>

                	    <div className="news_list-item">
                		    <div className="title">
                                <div className="title__head">
                                    Межвузовская олимпиаде по программированию и анализу данных
                                </div>
                                <div className="details">
                            	    <div className="details__date">19.05.2023</div>
                            	    <div className="details__theme">css_news</div>
                        	    </div>   
                            </div>
                            <div className="title__description">
	                            Приглашаем вас принять участие в Межвузовской олимпиаде по программированию и анализу данных, которая будет проводиться 21-24 апреля 2023 года в городах Алчевск (ЛНР), Белгород, Курск и Симферополь.
                            </div>
                            <div className="details_adaptive">
                                <div className="details__date">19.05.2023</div>
                                <div className="details__theme">css_news</div>
                            </div>
                	    </div>

                	    <div className="news_list-item">
                		    <div className="title">
                                <div className="title__head">
                                    Подготовьтесь к Летней школе заранее!
                                </div>
                                <div className="details">
                            	    <div className="details__date">19.05.2023</div>
                            	    <div className="details__theme">css_news</div>
                        	    </div>   
                            </div>
                            <div className="title__description">
	                            Скачивайте материалы и программное обеспечение по ссылкам ниже: Давний Партнер Летней школы – компания «ИнфоТеКС» подготовила для вас Хакатон «Защити сеть c помощью ViPNet», в ходе которого вы получите опыт развертывания VPNсетей и решения задач по организации защиты объекта информатизации с использованием технологии ViPNet.
                            </div>
                            <div className="details_adaptive">
                                <div className="details__date">19.05.2023</div>
                                <div className="details__theme">css_news</div>
                            </div>
                	    </div>
              
                    </div>
                    <div className="news_button">
                	    <button className="main_description-btn">Подробнее</button>
                    </div>
                	
                </div>
            </div>
        </section>

    );
  }
  
  export default News;