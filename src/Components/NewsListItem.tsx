import React, { FC, useState, useEffect } from 'react';

import '../App.css';

interface INewsListItem{
    title?: string,
    article?: string,
    author?: string,
    timeStamp?: string,
}

const NewsListItem = ({title, article, author, timeStamp}:INewsListItem) => {
    return(
        <div className="news_list-item">
                		    <div className="title">
                                <div className="title__head">
                                    {title}
                                </div>
                                <div className="details">
                            	    <div className="details__date">{timeStamp}</div>
                            	    <div className="details__theme">{author}</div>
                        	    </div>   
                            </div>
                            <div className="title__description">
	                            {article}
                            </div>
                            <div className="details_adaptive">
                                <div className="details__date">{timeStamp}</div>
                                <div className="details__theme">{author}</div>
                            </div>
                	    </div>
    );

}

export default NewsListItem;