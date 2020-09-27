import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: '',
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

  sendForm = (e) => {
    e.preventDefault();
    axios
      .post('/api/user/register', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) =>
        this.props.history.push('/message/registration', {
          heading: 'Registeration was succesfull',
          title: 'Please verify your E-Mail and then log in',
          message: 'Please check your spam!',
          link: '/signin',
          button: 'SignIn',
        })
      )
      .catch((err) => this.errorHandler(err.response.data, err));
  };

  errorHandler = (error, full) => {
    console.log(full);
    this.setState({ error: error.msg });
    setTimeout(() => {
      this.setState({ error: '' });
    }, 3000);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 mx-auto">
            <div>
              {this.state.error ? (
                <div className="error-alert alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sign Up</h5>
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
                  <button onClick={this.sendForm} className="btn btn-primary mt-5">
                    Sign Up
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

export default withRouter(SignUp);
