// Support react
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Conpoments
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Style
import "bootstrap/dist/css/bootstrap.css";
import "./public/css/Navbar.css";

// Page 
import Home from './page/Home';
import Detail from './page/Detail';
import SearchByTitle from './page/SearchByTitle';
import SearchByCategory from './page/SearchByCategory';

function App() {
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/detail/:post_id' component={Detail}/>
        <Route path='/search' exact component={SearchByTitle}/>
        <Route path='/search/:category_id' exact component={SearchByCategory}/>
      </Switch>
    </Router>
  );
}

export default App;
