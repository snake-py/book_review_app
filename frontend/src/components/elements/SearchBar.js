import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: '',
    };
  }

  onChangeSearch = (e) => {
    this.setState({ phrase: e.target.value });
  };
  onKeyPressSearch = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      this.props.history.push(`/book/search/${this.state.phrase}`);
    }
  };
  onClickSearch = (e) => {
    console.log(e.target.value);
    this.props.history.push(`/book/search/${this.state.phrase}`);
  };
  render() {
    return (
      <React.Fragment>
        <div style={divStyle}>
          <div style={cardAddStyle} className="card">
            <h1>Look for a book</h1>
            <div className="form-row ">
              <div className="form-group col-9">
                <input value={this.state.phrase} onKeyPress={this.onKeyPressSearch} onChange={this.onChangeSearch} className="form-control" type="text" placeholder="ISBN, Title, Phrase" />
              </div>
              <div className="form-group col-3">
                <button onClick={this.onClickSearch} className="btn btn-primary btn-block">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBar);

const divStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '50vw',
};

const cardAddStyle = {
  padding: '0 2vw',
  backgroundColor: 'rgba(255,255,255,0.6)',
};
