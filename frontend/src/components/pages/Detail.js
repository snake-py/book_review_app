import React, { Component } from 'react';
import SearchBar from '../elements/SearchBar';

export default class Detail extends Component{
    render() {
        return (
          <React.Fragment>
            <header>
              <SearchBar id="search_bar_detail"/>
            </header>
          </React.Fragment>
        );
      }
}