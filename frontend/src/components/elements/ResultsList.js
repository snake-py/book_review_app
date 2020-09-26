import React, { Component } from 'react';
import BookCard from './BookCard';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    
    this.setState();
  };

  componentWillUnmount = () => {
    this.setState({
      books: [],
    });
  };

  render() {
    return this.props.books.map((book) => <BookCard key={book.isbn} book={book} />);
  }
}
