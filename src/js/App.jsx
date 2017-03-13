import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return <div>Application</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
