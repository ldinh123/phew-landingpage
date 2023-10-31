import React from 'react';
import { Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='background'>
        <Navbar/>
        <Header/>
        <Feature/>
      </div>
      {/* <Brand/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/> */}
    </div>
  )
}

export default App
