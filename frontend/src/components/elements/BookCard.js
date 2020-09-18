import React, { Component } from 'react';

export default class BookCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div style={imgStyle}>
              <img src={this.props.book.thumbnail} className="card-img" alt={'picture of ' + this.props.book.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
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

const imgStyle = {
  height: '150px',
  width: '150px',
  overflow: 'hidden',
};
