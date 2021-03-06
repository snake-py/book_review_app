import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookDetail extends Component {
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
        <div className="bookdetail">
          <div className="row">
            <div className="col-4 image">
              <div style={imgStyle} >
                <img className="img-fluid" src={this.props.book.thumbnail} alt={'picture of ' + this.props.book.title} />
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col small_details">
                  <h2 className="card-title">{this.props.book.title}</h2>
                  <p className="card-text">Author: {this.props.book.author}</p>
                  <p className="card-text">
                    <small className="text-muted">ISBN: {this.props.book.isbn}</small>
                  </p>
                </div>
                <div className="col-3 rate">
                  <div className="row">
                    <div className="col-4">Rate </div>
                    <div className="col">{this.props.book.rating}</div>
                  </div>
                  <div className="row heart_detail">
                    <div className="col-4">
                      <i onClick={this.heartClickHandle} className="heart fas fa-heart"></i>
                    </div>
                    <div className="col heart_sum">{this.props.book.likeSum}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="text-justify text-left details">{this.props.book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookDetail);

const imgStyle = {
  height: '250px',
  width: '250px',
  overflow: 'hidden',
};
