import React from 'react';
import { Advice, Brand, CTA, Feature, Navbar } from './components';
import { About, Features, Footer, Header, Possibility } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='background'>
        <Navbar/>
        <Header/> 
        <Feature/>
        <About/>
        <Possibility/>
        <Brand/>
        <Advice/>
        <Footer/>
      </div>
      {/* 
      <Features/>
      <Possibility/>
      <CTA/>*/}

    </div>
  )
}

export default App
