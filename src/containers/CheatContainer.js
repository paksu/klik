import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMoney } from '../actions';


class CheatContainer extends Component {
  render() {
    return (
      <div>
        Cheats
        <button className="btn btn-danger" onClick={() => this.props.addMoney(10000)}>Add 10000$</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {

  return {
    addMoney: (amount) => dispatch(addMoney(amount))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheatContainer)
