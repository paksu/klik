import React from 'react';
import { connect } from 'react-redux';
import { getIncome } from '../selectors';


const Overview = ({money, income}) => (
  <div className="col-md-12 well well-lg">
    <h4>Cash {money} $</h4>
    <h4>Income <span className="text-success">{income}</span> $/second</h4>

  </div>
)

Overview.propTypes = {
  money: React.PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
    income: getIncome(state)
  }
}

export default connect(
  mapStateToProps
)(Overview)
