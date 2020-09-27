import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
    };
  }

  onChangeIdentifier = (e) => {
    this.setState({ identifier: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  checkKey = (e) => {
    if (e.target.value == 'Enter') {
      this.sendForm();
    }
  };

  sendForm = (e) => {
    e.preventDefault();
    if (this.state.identifier.includes('@')) {
      axios
        .post('/api/user/login', {
          email: this.state.identifier,
          password: this.state.password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      axios
        .post('/api/user/login', {
          username: this.state.identifier,
          password: this.state.password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sign In</h5>
                <form>
                  <div className="form-group">
                    <label>Username or E-Mail</label>
                    <input id="identifier" className="form-control" type="string" value={this.state.identifier} onChange={this.onChangeIdentifier} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input onMouseDown={this.checkKey} id="password" className="form-control" type="password" value={this.state.password} onChange={this.onChangePassword} />
                  </div>
                  <small className="form-text">
                    Not <Link to="signup">Signed Up</Link> yet?
                  </small>
                  <button onClick={this.sendForm} className="btn btn-primary mt-5">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
