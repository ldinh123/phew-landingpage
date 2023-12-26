import React from 'react';
import { Advice,  Feature, Navbar } from './components';
import { About, Features, Footer, Header, Possibility,Possibility2, Title, Blog } from './containers';
import './App.css'
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <div className='background'>
        <Navbar/>
        <Header/> 
        <Feature/>
        <Blog/>
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
