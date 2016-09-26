import React from 'react';
import { connect } from 'react-redux';
import { getIncome } from '../selectors';
import { Link } from 'react-router';
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
        <p className="navbar-text text-success"><Money amount={money} />  <span className="text-success"><Money amount={income} /></span> $/s</p>

        <ul className="nav navbar-nav">
          <li>
            <Link to="/" activeClassName="active">
              <i className="fa fa-play-circle" aria-hidden="true"></i>
              {" "}
              Game
              </Link>
          </li>
          <li>
            <Link to="/achievements" activeClassName="active">
              <i className="fa fa-trophy" aria-hidden="true"></i>
              {" "}
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/stats" activeClassName="active">
              <i className="fa fa-line-chart" aria-hidden="true"></i>
              {" "}
              Stats
            </Link>
          </li>
        </ul>

        <div className="navbar-text navbar-right" style={{marginRight: "10px"}}>
          <Twitter tweet={tweet} />
        </div>
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
    income: getIncome(state)
  }
}

export default connect(
  mapStateToProps
)(Overview)
