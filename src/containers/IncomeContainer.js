import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { connect } from 'react-redux';
import Money from '../components/Money';

import './IncomeContainer.css';

const FADE_ANIMATION_LENGTH = 1000;

class IncomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementId: 0,
      moneyIncome: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const income = this.state.moneyIncome.filter(i => new Date() - i.addedAt < FADE_ANIMATION_LENGTH);
    const moneyIncome = nextProps.money - this.props.money;
    this.setState({
      moneyIncome: moneyIncome > 0 ? [...income, {key: this.state.elementId++, addedAt: new Date().getTime(), income: moneyIncome}] : [...income]
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <div style={{paddingBottom: "20px"}}>
          <img src="/images/pixel-city.jpg" style={{width: "100%", height: "300px"}}></img>
        </div>
        <div className="row">
          <div className="col-md-3">
          Money
          <ReactCSSTransitionGroup
            transitionName="income-animation"
            transitionEnterTimeout={FADE_ANIMATION_LENGTH}
            transitionEnter={true}
            transitionLeave={false}>
            {this.state.moneyIncome.map(moneyIncome => {
              return (
                <span key={moneyIncome.key} className="money-income">
                  + <Money amount={moneyIncome.income} /> <i className="fa fa-money" />
                </span>
              )
            })}
          </ReactCSSTransitionGroup>
          </div>
          <div className="col-md-3">Innovation</div>
          <div className="col-md-3">Swagger</div>
        </div>
        <div className="row">
          <div className="col-md-3 text-success" style={{fontSize: "2em"}}>
            $ <Money amount={this.props.money} />
          </div>
          <div className="col-md-3 text-muted" style={{fontSize: "2em"}}>0</div>
          <div className="col-md-3 text-muted" style={{fontSize: "2em"}}>0</div>
        </div>
      </div>
    )
  }
}

IncomeContainer.contextTypes = {
  store: React.PropTypes.object
};

IncomeContainer.propTypes = {
  money: React.PropTypes.number.isRequired
}


const mapStateToProps = (state) => {
  return {
    money: state.money,
  }
}

export default connect(
  mapStateToProps
)(IncomeContainer)
