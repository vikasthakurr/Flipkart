import React from 'react'
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Tabs />
      <Home />
    </div>
  )
}

export default App