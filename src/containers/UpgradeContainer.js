import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upgrade from '../components/Upgrade'
import { buyUpgrade } from '../actions';
import { getUpgradesForSale } from '../selectors';

class UpgradeContainer extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h4>Productivity boosts</h4>
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
