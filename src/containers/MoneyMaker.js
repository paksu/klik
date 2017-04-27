import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { connect } from 'react-redux';
import Money from '../components/Money';

import './MoneyMaker.css';


class MoneyMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyIncome: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const income = this.state.moneyIncome.filter(i => new Date() - i.addedAt < 25000);
    const moneyIncome = nextProps.money - this.props.money;
    this.setState({
      moneyIncome: moneyIncome > 0 ? [...income, {addedAt: new Date().getTime(), income: moneyIncome}] : [...income],
    });
  }
  render() {
    return (
      <div className="col-md-6">
        <div style={{paddingBottom: "20px"}}>
          <img src="/images/pixel-city.jpg" style={{width: "60%"}}></img>
        </div>
        <div>
          <span className="label label-success" style={{fontSize: "1em"}}>
          {" "}
          $ <Money amount={this.props.money} />
          </span>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={1000}
            transitionEnter={true}
            transitionLeave={false}>
            {this.state.moneyIncome.map(moneyIncome => {
              return (
                <span key={moneyIncome.addedAt} className="text-success" style={{fontSize: "1em", display: "none"}}>
                  +<Money amount={moneyIncome.income} /> $
                </span>
              )
            })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

MoneyMaker.contextTypes = {
  store: React.PropTypes.object
};

MoneyMaker.propTypes = {
  money: React.PropTypes.number.isRequired
}


const mapStateToProps = (state) => {
  return {
    money: state.money,
  }
}

export default connect(
  mapStateToProps
)(MoneyMaker)
