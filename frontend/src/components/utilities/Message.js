import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Message extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 mx-auto">
            <div className="card">
              <h5 className="card-header">{this.props.location.state.heading}</h5>
              <div className="card-body">
                <h5 className="card-title">{this.props.location.state.title}</h5>
                <p className="card-text">{this.props.location.state.text}</p>
                {this.props.location.state.link ? (
                  <Link to={this.props.location.state.link} className="btn btn-primary">
                    {this.props.location.state.button}
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
