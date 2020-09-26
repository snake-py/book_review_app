import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
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
                    <label>Username</label>
                    <input id="username" className="form-control" type="string" value={this.state.username} onChange={this.onChangeUsername} />
                  </div>
                  <div className="form-group">
                    <label>E-Mail</label>
                    <input id="email" className="form-control" type="email" value={this.state.email} onChange={this.onChangeEmail} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input id="password" className="form-control" type="password" value={this.state.password} onChange={this.onChangePassword} />
                  </div>
                  <small className="form-text">
                    Already Sign Up? Go to <Link to="signin">Log In</Link>.
                  </small>
                  <button className="btn btn-primary mt-5">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
