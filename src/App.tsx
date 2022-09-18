import React from 'react';
import './App.css';
import Router, {ROUTER_PATH_BASE64, ROUTER_PATH_CRYPTO, ROUTER_PATH_TIMESTAMP} from "./utils/Router";
import {Link} from "react-router-dom";

function App() {
  // console.log('<App />');

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
