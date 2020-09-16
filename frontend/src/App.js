import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
       <Route path="/" exact component={Home} />
       <Route path="/signin" exact component={SignIn} />
       <Route path="/signup" exact component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
