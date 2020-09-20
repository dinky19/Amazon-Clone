import React from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Router>
     <div className="app">
     <switch>
       <Route path = "/checkout">
       <h1>Checkout</h1>
       </Route>
       <Route path = "/login">
       <h1>Log in</h1>
       </Route>
       <Route path = "/">
       <Header/>
       <h1>Home Page</h1>
       </Route>
     </switch>
    </div>
    </Router>
   
  );
}

export default App;
