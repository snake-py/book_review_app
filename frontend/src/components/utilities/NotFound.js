import React, { Component } from 'react';
import { withRouter } from 'react-router';


class NotFound extends Component {
  componentDidMount() {
    this.props.history.push('/message/error', {
      heading: 'Error 404',
      title: 'We could not resolve your request. Please go back to home.',
      message: 'You can try to reac out to our support if the error comes again',
      link: '/',
      button: 'Home',
    });
  }
  render() {
    return <div></div>;
  }
}
export default withRouter(NotFound)