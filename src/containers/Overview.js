import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Twitter from '../components/Twitter';

import './Overview.css';


const Overview = ({companyName}) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <span className="navbar-brand" href="#">{companyName}</span>
      </div>
      <div className="collapse navbar-collapse">
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
          <Twitter companyName={companyName} />
        </div>
      </div>
    </div>
  </nav>
)

const mapStateToProps = (state) => {
  return {
    companyName: state.companyName
  }
}

export default connect(
  mapStateToProps
)(Overview)
