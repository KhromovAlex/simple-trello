import React from 'react';
import Header from './Header';
import Content from './Content';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
