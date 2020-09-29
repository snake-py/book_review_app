import React, { Component } from 'react';
import BookDetail from '../elements/BookDetail';

export default class Detail extends Component{
    book = {
      isbn: '564-135468464',
      title: 'Book 1',
      author: 'Author 1',
      thumbnail: 'https://picsum.photos/150/150?random=1',
      rating: 8.5,
    }
    render() {
        return (
          <React.Fragment>
            <BookDetail book={this.book}/>
          </React.Fragment>
        );
      }
}