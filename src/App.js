import './App.css';
import React from "react";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Admin from './components/Admin/Admin';
import AddProducts from './components/AddProducts/AddProducts';
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
