import React, { useState, useEffect } from 'react';
import "./ScrollArrow.css";


const ScrollArrow: React.FC = () => {
 const [isVisible, setIsVisible] = useState(false);


 function getScrollHeight() {
    return document.body.scrollHeight;
   }
   
 useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > getScrollHeight() * 0.20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
   }, []);
   

 const handleClick = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };

 return isVisible ? (
    <div id="scroll-to-top"  onClick={handleClick}>
        <img src="./img/arrow.png" alt="" />
    </div>
 ) : null;
};

export default ScrollArrow;
