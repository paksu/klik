import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyUpgrade, alterMoney } from '../actions';
import { UPGRADES } from '../core/upgrades';
import Upgrade from '../components/Upgrade';
import _ from 'lodash';


class UpgradeContainer extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h3>Productivity boosts <i className="fa fa-question-circle-o" data-tip="Spend swagger to upgrade staff" /></h3>
        <div className="text-muted" style={{display: this.props.upgrades.length ? 'none': 'block'}}>
          <i className="fa fa-lock"></i>
          {" "}
          Upgrades will be unlocked after you earn more money
        </div>
        {this.props.upgrades.map((upgrade) => {
          return <Upgrade
            key={upgrade.id}
            upgrade={upgrade}
            onUpgradeClick={() => this.props.buyUpgradeClick(upgrade, this.props.money)}
            canAfford={this.props.money >= upgrade.cost}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const upgradesByCost = _.sortBy(UPGRADES, 'cost')
  return {
    upgrades: upgradesByCost.filter(u => ! state.builtUpgrades.find(b => b === u.id)),
    money: state.money
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyUpgradeClick: (upgrade, money) => {
      if(money >= upgrade.cost) {
        dispatch(alterMoney(-upgrade.cost))
        dispatch(buyUpgrade(upgrade))
      }
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradeContainer)
