import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Results from './components/pages/Results';
import history from './components/utilities/History';
import NotFound from './components/utilities/NotFound';
import Message from './components/utilities/Message';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('api/user/hello').then((res) => console.log(res));
  }

  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/book/search/:phrase" component={Results} />
          <Route path="/message/:from" component={Message} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
