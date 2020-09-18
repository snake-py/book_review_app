import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={divStyle}>
          <div style={cardAddStyle} className="card">
            <h1>Look for a book</h1>
            <div className="form-row ">
              <div className="form-group col-9">
                <input className="form-control" type="text" placeholder="ISBN, Title, Phrase" />
              </div>
              <div className="form-group col-3">
                <button className="btn btn-primary btn-block">Search</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const divStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '50vw',
};

const cardAddStyle = {
    padding: "0 2vw",
    backgroundColor: "rgba(255,255,255,0.6)"
}