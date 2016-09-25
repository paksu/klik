import React from 'react';
import { connect } from 'react-redux';
import { getIncome } from '../selectors';
import Money from '../components/Money';
import Twitter from '../components/Twitter';

import './Overview.css';


const Overview = ({money, income, tweet}) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">IT C0RP0R4TiON SiMULAt0R</a>
      </div>
      <div className="collapse navbar-collapse">
        <p className="navbar-text text-success"><Money amount={money} /> $</p>
        <p className="navbar-text text-success">Income <span className="text-success"><Money amount={income} /></span> $/s</p>
        <p className="navbar-text navbar-right">
        <Twitter tweet={tweet} />
        </p>
      </div>
    </div>
  </nav>
)

Overview.propTypes = {
  money: React.PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
    income: getIncome(state),
    tweet: Math.random() < 0.1 ? "Foo" : "Hello there @company"
  }
}

export default connect(
  mapStateToProps
)(Overview)
