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
import Search from './page/Search';

function App() {
  return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:post_id' component={Detail}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
