import React, { Component } from 'react';
import BookCard from './BookCard';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          isbn: '564-135468464',
          title: 'Book 1',
          author: 'Author 1',
          thumbnail: 'https://picsum.photos/150/150?random=1',
        },
        {
          isbn: '4566-54561654',
          title: 'Book 2',
          author: 'Author 2',
          thumbnail: 'https://picsum.photos/150/150?random=2',
        },
        {
          isbn: '846-8544894',
          title: 'Book 3',
          author: 'Author 3',
          thumbnail: 'https://picsum.photos/100/100?random=3',
        },
        {
          isbn: '564-4556468464',
          title: 'Book 4',
          author: 'Author 4',
          thumbnail: 'https://picsum.photos/200/300?random=4',
        },
      ],
    };
  }
  render() {
    return this.state.books.map((book) => <BookCard key={book.isbn} book={book} />);
  }
}
