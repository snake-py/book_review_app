import React, { Component } from 'react';
import ResultsList from '../elements/ResultsList';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          isbn: '564-4556468464',
          title: 'Book 4',
          author: 'Author 4',
          thumbnail: 'https://picsum.photos/200/300?random=4',
          rating: 8.3,
        },
      ],
    };
  }
  componentDidMount() {
    //API Call Here
    console.log(this.props.match.params.phrase);
  }
  render() {
    return (
      <div className="container mt-5">
        <h1>You Searched</h1>
        <p>{this.props.match.params.phrase}</p>
        <ResultsList books={this.state.books} />
      </div>
    );
  }
}
