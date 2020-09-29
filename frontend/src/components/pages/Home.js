import React, { Component } from 'react';
import SearchBar from '../elements/SearchBar';
import currentMonth from '../../helper/date';
import Results from '../elements/ResultsList';

export default class Home extends Component {
  books = [
    {
      isbn: '564-135468464',
      title: 'Book 1',
      author: 'Author 1',
      thumbnail: 'https://picsum.photos/150/150?random=1',
      rating: 8.5,
    },
    {
      isbn: '4566-54561654',
      title: 'Book 2',
      author: 'Author 2',
      thumbnail: 'https://picsum.photos/150/150?random=2',
      rating: 6.5,
    },
    {
      isbn: '846-8544894',
      title: 'Book 3',
      author: 'Author 3',
      thumbnail: 'https://picsum.photos/100/100?random=3',
      rating: 9.7,
    },
    {
      isbn: '564-4556468464',
      title: 'Book 4',
      author: 'Author 4',
      thumbnail: 'https://picsum.photos/200/300?random=4',
      rating: 8.3,
    },
  ];

  render() {
    return (
      <React.Fragment>
        <header id="header">
          <SearchBar/>
        </header>
        <section>
          <div className="container mt-5">
            <div className="row">
              <h1>The 10 Best books of {currentMonth()}</h1>
            </div>
            <Results books={this.books} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
