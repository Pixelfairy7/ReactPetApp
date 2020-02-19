import React from 'react';
import Header from './components/Header';
import './App.scss';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Header/>
      <Search/>
    </div>
    
  );
}

export default App;
