import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'

function App() {
  return (
        <React.Fragment>
          <Navbar />
            <Switch>
              <Route path='/' exact component={ProductList}/>
              <Route path='/details' component = {Details} />
              <Route path='/cart' component = {Cart} />
              <Route component = {Default} />
            </Switch>
      </React.Fragment>
  );
}

export default App;
