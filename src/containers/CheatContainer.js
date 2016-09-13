import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMoney, restart } from '../actions';


class CheatContainer extends Component {
  render() {
    return (
      <div>
        <b> Cheats </b>
        <button className="btn btn-danger" onClick={() => this.props.addMoney(10000)}>Add 10000$</button>
        <button className="btn btn-primary" onClick={() => this.props.restart()}>Start over</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {

  return {
    addMoney: (amount) => dispatch(addMoney(amount)),
    restart: (amount) => dispatch(restart())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheatContainer)
