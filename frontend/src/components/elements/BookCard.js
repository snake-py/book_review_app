import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  heartClickHandle = () => {
    this.props.history.push('/signin');
  };

  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div style={imgStyle}>
              <img src={this.props.book.thumbnail} className="card-img" alt={'picture of ' + this.props.book.title} />
            </div>
            <div className="col">
              <div className="card-body">
                <span className="rating-box">
                  <i onClick={this.heartClickHandle} className="heart fas fa-heart"></i>
                  <span className="rating">{this.props.book.rating}</span>
                </span>
                <h5 className="card-title">{this.props.book.title}</h5>
                <p className="card-text">Author: {this.props.book.author}</p>
                <p className="card-text">
                  <small className="text-muted">ISBN: {this.props.book.isbn}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookCard);

const imgStyle = {
  height: '150px',
  width: '150px',
  overflow: 'hidden',
};
