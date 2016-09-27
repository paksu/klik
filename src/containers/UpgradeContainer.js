import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upgrade from '../components/Upgrade'
import { buyUpgrade } from '../actions';
import { getUpgradesForSale } from '../selectors';

class UpgradeContainer extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3>Productivity boosts</h3>
        <div className="text-muted" style={{display: this.props.upgrades.length ? 'none': 'block'}}>
          <i className="fa fa-lock"></i>
          {" "}
          Upgrades will be unlocked after you earn more money
        </div>
        {this.props.upgrades.map((upgrade) => {
          return <Upgrade
            key={upgrade.id}
            upgrade={upgrade}
            onUpgradeClick={() => this.props.buyUpgradeClick(upgrade)}
            canAfford={this.props.money >= upgrade.cost}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    upgrades: getUpgradesForSale(state),
    money: state.money
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyUpgradeClick: (upgrade) => dispatch(buyUpgrade(upgrade))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradeContainer)
