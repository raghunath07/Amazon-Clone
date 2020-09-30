import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe('pk_test_51HVg0JJinVQaEO0jLuBAUP9huOsutsAh3NLzdV26ljvIPzFayY1yO1XPc0kI0RPnb8w2KAS49HpzM5SzkZpsxWyM00nfmPFDCm')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is  >>> ', authUser)
      if(authUser){
        // the user just logged in / the user was logged in an refreshed the page
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
      <Switch>
      <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
        </Route>
        <Route path="/">
        <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
