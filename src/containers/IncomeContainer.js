import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { connect } from 'react-redux';
import Money from '../components/Money';
import { createTick, createClick } from '../actions';

import './IncomeContainer.css';

const FADE_ANIMATION_LENGTH = 1000;

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
    const swaggerIncome = nextProps.swagger - this.props.swagger;
    const innovationIncome = nextProps.innovation - this.props.innovation;
    const animatedIncomes = this.state.animatedIncomes.filter(i => new Date() - i.addedAt < FADE_ANIMATION_LENGTH);
    let newIncomes = []
    if(moneyIncome > 0) {
      newIncomes.push({type: "money", key: this.state.elementId++, addedAt: new Date().getTime(), income: moneyIncome});
    }
    if(swaggerIncome > 0) {
      newIncomes.push({type: "swagger", key: this.state.elementId++, addedAt: new Date().getTime(), income: swaggerIncome});
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
      <div className="col-md-6">
        <div style={{paddingBottom: "20px"}}>
          <img src="/images/pixel-city.jpg" style={{width: "100%", height: "300px"}}></img>
        </div>
        <div className="row">
          <div className="col-md-4">
          Money
          <ReactCSSTransitionGroup
            transitionName="income-animation"
            transitionEnterTimeout={FADE_ANIMATION_LENGTH}
            transitionEnter={true}
            transitionLeave={false}>
            {this.state.animatedIncomes.filter(i => i.type == "money").map(income => {
              return (
                <span key={income.key} className="money-income">
                  + <Money amount={income.income} /> <i className="fa fa-money" />
                </span>
              )
            })}
          </ReactCSSTransitionGroup>
          </div>
          <div className="col-md-4">
            Innovation
            <ReactCSSTransitionGroup
              transitionName="income-animation"
              transitionEnterTimeout={FADE_ANIMATION_LENGTH}
              transitionEnter={true}
              transitionLeave={false}>
              {this.state.animatedIncomes.filter(i => i.type == "innovation").map(income => {
                return (
                  <span key={income.key} className="money-income text-info">
                    + <Money amount={income.income} /> <i className="fa fa-flask" />
                  </span>
                )
              })}
            </ReactCSSTransitionGroup>
          </div>
          <div className="col-md-4">
            Swagger
            <ReactCSSTransitionGroup
              transitionName="income-animation"
              transitionEnterTimeout={FADE_ANIMATION_LENGTH}
              transitionEnter={true}
              transitionLeave={false}>
              {this.state.animatedIncomes.filter(i => i.type == "swagger").map(income => {
                return (
                  <span key={income.key} className="money-income text-info">
                    + <Money amount={income.income} /> <i className="fa fa-bolt" />
                  </span>
                )
              })}
            </ReactCSSTransitionGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-success" style={{fontSize: "2em"}}>
            $ <Money amount={this.props.money} />
          </div>
          <div className="col-md-4 text-info" style={{fontSize: "2em"}}>
            {this.props.innovation}
          </div>
          <div className="col-md-4 text-info" style={{fontSize: "2em"}}>
            {this.props.swagger}
          </div>
        </div>
        <button className="btn btn-block btn-success" style={{minHeight: "50px"}} onClick={this.props.doWork}>
          <i className="fa fa-gears" style={{fontSize: "2em"}}/> Do some Work
        </button>
      </div>
    )
  }
}

IncomeContainer.contextTypes = {
  store: React.PropTypes.object
};

IncomeContainer.propTypes = {
  money: React.PropTypes.number.isRequired,
  swagger: React.PropTypes.number.isRequired,
  innovation: React.PropTypes.number.isRequired,
}


const mapStateToProps = (state) => {
  return {
    money: state.money,
    swagger: state.swagger,
    innovation: state.innovation
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    doWork: () => {
      const swaggerAmount = Math.random() < 0.1 ? 1 : 0;
      const innovationAmount = Math.random() < 0.1 ? 1 : 0;
      dispatch(createTick(swaggerAmount, innovationAmount))
      dispatch(createClick())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeContainer)
