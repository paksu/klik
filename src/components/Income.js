import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Money from '../components/Money';

import './Income.css';

const FADE_ANIMATION_LENGTH = 1000;


const IncomeAnimation = ({incomes, textStyle, icon}) => (
  <ReactCSSTransitionGroup
    transitionName="income-animation"
    transitionEnterTimeout={FADE_ANIMATION_LENGTH}
    transitionEnter={true}
    transitionLeave={false}>
    {incomes.map(income => {
      return (
        <span key={income.key} className={"money-income " + textStyle}>
          + <Money amount={income.income} /> <i className={"fa fa-" + icon} />
        </span>
      )
    })}
  </ReactCSSTransitionGroup>
)

class IncomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementId: 0,
      animatedIncomes: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const moneyIncome = nextProps.money - this.props.money;
    const swagIncome = nextProps.swag - this.props.swag;
    const innovationIncome = nextProps.innovation - this.props.innovation;
    const animatedIncomes = this.state.animatedIncomes.filter(i => new Date() - i.addedAt < FADE_ANIMATION_LENGTH);

    let newIncomes = [];

    if(moneyIncome > 0) {
      newIncomes.push({type: "money", key: this.state.elementId++, addedAt: new Date().getTime(), income: moneyIncome});
    }
    if(swagIncome > 0) {
      newIncomes.push({type: "swag", key: this.state.elementId++, addedAt: new Date().getTime(), income: swagIncome});
    }
    if(innovationIncome > 0) {
      newIncomes.push({type: "innovation", key: this.state.elementId++, addedAt: new Date().getTime(), income: innovationIncome});
    }

    this.setState({
      animatedIncomes: animatedIncomes.concat(newIncomes)
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
          Money
          <IncomeAnimation
            incomes={this.state.animatedIncomes.filter(i => i.type === "money")}
            textStyle="text-success"
            icon="money" />
          </div>
          <div className="col-md-4">
            Innovation
            <IncomeAnimation
              incomes={this.state.animatedIncomes.filter(i => i.type === "innovation")}
              textStyle="text-info"
              icon="flask" />
          </div>
          <div className="col-md-4">
            Swag level
            <IncomeAnimation
              incomes={this.state.animatedIncomes.filter(i => i.type === "swag")}
              textStyle="text-info"
              icon="bolt" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-success" style={{fontSize: "2em"}}>
            $ <Money amount={this.props.money} />
          </div>
          <div className="col-md-4 text-info" style={{fontSize: "2em"}}>
            <i className="fa fa-flask" /> {this.props.innovation}
          </div>
          <div className="col-md-4 text-info" style={{fontSize: "2em"}}>
            <i className="fa fa-bolt" /> {this.props.swag}
          </div>
        </div>
      </div>
    )
  }
}

IncomeContainer.propTypes = {
  money: React.PropTypes.number.isRequired,
  swag: React.PropTypes.number.isRequired,
  innovation: React.PropTypes.number.isRequired,
}

export default IncomeContainer
