import React from 'react';
import { Advice,  Feature, Navbar } from './components';
import { About, Features, Footer, Header, Possibility,Possibility2, Title } from './containers';
import './App.css'
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <div className='background'>
        <Navbar/>
        <Header/> 
        <Feature/>
        <About/>
        <Title/>
        <Possibility/>
        <Possibility2/>
        <Advice/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
