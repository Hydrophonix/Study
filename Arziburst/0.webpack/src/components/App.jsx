import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { ..... } from '../actions';

// import ..... from '../containers/......jsx';


class App extends Component {

  static propTypes = {

  }


  render() {
    return (
      <div className="wrapper">
        {'Hello webpack!'}
      </div>
    );
  }
}

export default connect(null, null)(App);
