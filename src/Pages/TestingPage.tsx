import  { FC } from 'react';
import FooterSecond from '../Components/FooterSecond/FooterSecond';
import TestList from '../Components/TestList/TestList';
import IdSession from '../Components/IdSession/IdSession';
import './TestingPage.css';

const TestingPage: FC = () => {
 
    return (
        <>
            <IdSession />
            <TestList />
            <FooterSecond />
        </>
        
    );
  }
  
  export default TestingPage;