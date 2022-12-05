import React from 'react';
import logo from './logo.svg';
import Converter from './components/converter';

function App() {
  return (
    <div className="App">
      <Converter DataURL='https://www.cbr-xml-daily.ru/latest.js'/>
    </div>
  );
}

export default App;
