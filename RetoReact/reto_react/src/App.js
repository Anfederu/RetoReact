import { Card } from './components/card';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Gallery } from './components/Gallery';

function App() {

  return (
    <div className='container'>
      <Gallery />
    </div>
  );
}

export default App;
