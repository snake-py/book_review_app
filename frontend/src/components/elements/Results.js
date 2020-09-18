import React, { Component } from 'react';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: 'Book1',
          author: 'Author 1',
        },
        {
          title: 'Book2',
          author: 'Author 2',
        },
        {
          title: 'Book3',
          author: 'Author 3',
        },
        {
          title: 'Book3',
          author: 'Author 3',
        },
      ],
    };
  }
  render() {
    return <div></div>;
  }
}
