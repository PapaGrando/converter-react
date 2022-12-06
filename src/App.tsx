import React from 'react';
import Converter from './components/converter';

function App() {
  return (
    <div className="App">
      <Converter DataURL='https://www.cbr-xml-daily.ru/latest.js'/>
    </div>
  );
}

export default App;
