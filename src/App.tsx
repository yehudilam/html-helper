import React from 'react';
import './App.css';
import Router from "./router/Router";

function App() {
  console.log('app');
  
  return (
    <div className="h-full w-full">
      <Router/>
    </div>
  );
}

export default App;
