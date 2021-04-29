import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import  Homepage  from './pages/Homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/Shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
