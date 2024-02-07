import React from 'react';
import logo from './logo.svg';
import MainPage from './Pages/MainPage'
import TestingPage from './Pages/TestingPage';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/testing-system" element={<TestingPage />} />
      </Routes>
   </Router>
  );
}

export default App;
