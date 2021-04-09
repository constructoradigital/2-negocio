import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import  Home  from './pages/HomePage/Home';
import { Navbar } from "./components/index";
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import Signup from './pages/Signup/Signup'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (

      <Router>
        <GlobalStyle/>
        <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services"  component={Services} />
        <Route path="/products"  component={Products} />
        <Route path="/sign-up"  component={Signup} />
      </Switch>
      <Footer/>
      </Router>

  );
}

export default App;
