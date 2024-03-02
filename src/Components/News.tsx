import React, { FC, useEffect, useState } from 'react';

import '../App.css';
import NewsListItem from './NewsListItem';
import axios from 'axios';

const News: FC = () => {
    const [LatestNews, SetLatestNews] = useState(Array());

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/news/latest';
        axios.get(apiUrl).then((resp) => {
          const response = resp.data;
          let ListLatestNews = Array();
          for(let i = 0; i < response.length; i++){
            ListLatestNews.push(<NewsListItem title={response[i].title} 
                                              article={response[i].article}
                                              author={response[i].author}
                                              timeStamp={response[i].timestamp}
                                />)
          }
          SetLatestNews(ListLatestNews);
        });
      }, []);

    return (
        <section className="news">
            <div className="container">
                <div className="news_wrapper">
               	    <div className="news_wrapper-header"><h2>Новости</h2></div>
               	    <div className="news_list">
                	    {LatestNews}
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