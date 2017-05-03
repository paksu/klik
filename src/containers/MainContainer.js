import React, { Component } from 'react';
import { connect } from 'react-redux';
import Income from '../components/Income';
import { createTick, createClick } from '../actions';


class MainContainer extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-4">
            <h1>{this.props.companyName} HQ</h1>
            <h4><i className="fa fa-diamond" /> Level 1</h4>
          </div>
          <div className="col-md-8">
            <img alt="Corporate HQ" src="/images/hq.jpg" style={{width: "100%"}}></img>
          </div>
        </div>

        <Income money={this.props.money} swag={this.props.swag} innovation={this.props.innovation} />

        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-block btn-success" style={{minHeight: "50px"}} onClick={this.props.doWork}>
              <i className="fa fa-gears" style={{fontSize: "2em"}}/> Do some Work
            </button>
        </div>
      </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Boosts</h4>
            <div>
              <span className="text-primary"><i className="fa fa-flask" /> 100</span>
              {" Kilpailukyky "}
              <button disabled="true" className="btn btn-default btn-small">
                <i className="fa fa-plus" /> 100% extra income for 5 minutes
              </button>
            </div>
            <div>
              <span className="text-primary"><i className="fa fa-flask" /> 1000</span>
              {" Kilpailukyky 2 "}
              <button disabled="true" className="btn btn-default btn-small">
              <i className="fa fa-plus" /> 100% extra income for 120 minutes
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  money: React.PropTypes.number.isRequired,
  swag: React.PropTypes.number.isRequired,
  innovation: React.PropTypes.number.isRequired,
}


const mapStateToProps = (state) => {
  return {
    money: state.money,
    swag: state.swagger,
    innovation: state.innovation,
    companyName: state.companyName
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
)(MainContainer)
