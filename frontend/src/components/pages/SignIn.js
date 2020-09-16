import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div className="row mt-5">
        <div className="col-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sign In</h5>
              <form>
                <div class="form-group">
                  <label for="identifier">Username or E-Mail</label>
                  <input id="identifier" className="form-control" type="string" value={this.state.identifier} onChange={this.onChangeIdentifier} />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" className="form-control" type="password" value={this.state.password} onChange={this.onChangePassword} />
                </div>
                <small className="form-text">
                  Not <Link to="signup">Signed Up</Link> yet?
                </small>
                <button className="btn btn-primary mt-5">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
