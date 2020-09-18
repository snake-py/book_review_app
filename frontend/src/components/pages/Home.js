import React, { Component } from 'react';
import SearchBar from '../elements/SearchBar';
import currentMonth from '../../helper/date'
import Results from '../elements/ResultsList'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="header">
          <SearchBar />
        </header>
        <section>
          <div className="container mt-5">
            <div className="row">
              <h1>The 10 Best books of {currentMonth()}</h1>
            </div>
            <Results />
          </div>
        </section>
      </React.Fragment>
    );
  }
}


