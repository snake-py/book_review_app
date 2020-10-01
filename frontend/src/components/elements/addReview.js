import React, { Component } from 'react';

export default class addReview extends Component {
    constructor(props) {
      super(props);
      this.state = {
        phrase: '',
      };
    }
  
    render() {
      return (
        <React.Fragment>
            <div className="form-row">
                <div className="form-group col-md-10">
                    <label for="inputAddress">ADD REVIEW</label>
                    <input type="text" className="form-control" placeholder="Title" onSubmit="return false;" onChange="return false;"/>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputAddress">Rate</label>
                    <select id="inputState" className="form-control">
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
            </div>
            <div className="input-group">
                <textarea className="form-control" aria-label="With textarea" placeholder="Review text"></textarea>
            </div>
            {/* <div className="form-row">
                <div className="form-group col-md-12 col-form-label col-form-label-lg">
                <input type="text" className="form-control form-control-lg" id="inputCity" placeholder="Review text"/>
                </div>
            </div> */}
            <div className="form-row submit">
                <div className="form-group col-md-10">
                </div>
                <div className="form-group col-md-2 submit">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </React.Fragment>
      );
    }
  }