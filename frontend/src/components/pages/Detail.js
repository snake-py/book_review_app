import React, { Component } from 'react';
import SearchBar from '../elements/SearchBar';

export default class Detail extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="search_bar_detail">
            <SearchBar/>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
