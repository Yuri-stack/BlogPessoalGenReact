import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/statics/Navbar/Navbar';
import Footer from './components/statics/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
            <Route path="/home">
              <Home />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
