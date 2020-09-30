import React, { Component } from 'react';

export default class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  render() {
    return (
      <div className= "reviewCard">
          <div className="container border border-primary">
              <div className = "row">
                  <div className = "col-8 review_detail">
                        <h5>{this.props.review.title}</h5>
                        <h6>{this.props.review.user}</h6>
                        <p className="card-text">
                                    <small className="text-muted">{this.props.review.date}</small>
                        </p>
                  </div>
                  <div className="col">
                      <div className="row rate">
                        <div className="col-4">Rate </div>
                        <div className="col">{this.props.review.rating}</div>
                      </div>
                  </div>
              </div>
              <div className = "row">
                  <div className = "col review_text">
                        <p>{this.props.review.text}</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
