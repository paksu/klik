import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setCompanyName } from '../actions'
import './StartScreen.css';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isReady: false
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      isReady: (event.target.value || '').length > 2
    });
  }

  launch() {
    this.props.setCompanyName(this.state.name);
    this.props.router.push("/")
  }

  render() {
    return (
      <div>
        <div className="start-background"></div>
        <div className="start-jumbotron jumbotron col-md-offset-2 col-md-8" style={{marginTop: "55px"}}>
          <div className="container">
            <h4>Welcome to</h4>
            <h1>IT CORPORATION <b>SIMULATOR</b></h1>
            <p>
              Hello CEO. Your company has some seed money. You need to keep shareholders happy and start making some profit.
            </p>
            <p>
              Start by hiring some people. You need to spend money to make money and then some.
              Keep your staff productive. Earn some more <b>$$$</b>
            </p>
            <p>Enter the name of your company here when you are ready to go</p>

            <div className="input-group col-md-6">
              <input type="text" className="form-control" placeholder="Name of the company..." onChange={(e) => this.handleChange(e)} />
              <span className="input-group-btn">
                <button className="btn btn-success" type="button" onClick={() => this.launch()} disabled={!this.state.isReady}>
                  Launch <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </span>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companyName: state.companyName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCompanyName: (name) => dispatch(setCompanyName(name))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen))
