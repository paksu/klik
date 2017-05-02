import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyUpgrade, alterSwagger } from '../actions';
import { UPGRADES } from '../core/upgrades';
import Upgrade from '../components/Upgrade';
import _ from 'lodash';


class UpgradeContainer extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h3>Upgrades <i className="fa fa-question-circle-o" data-tip="Spend swagger to upgrade staff" /></h3>
        <div className="text-muted" style={{display: this.props.upgrades.length ? 'none': 'block'}}>
          <i className="fa fa-lock"></i>
          {" "}
          More upgrades will be unlocked after you earn more money
        </div>
        {this.props.upgrades.map((upgrade) => {
          return <Upgrade
            key={upgrade.id}
            upgrade={upgrade}
            onUpgradeClick={() => this.props.buyUpgradeClick(upgrade, this.props.swagger)}
            canAfford={this.props.swagger >= upgrade.cost}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const upgradesByCost = _.sortBy(UPGRADES, 'cost')
  return {
    upgrades: upgradesByCost.filter(u => u.visibleAfter <= state.swagger && ! state.builtUpgrades.find(b => b === u.id)),
    swagger: state.swagger
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyUpgradeClick: (upgrade, swagger) => {
      if(swagger >= upgrade.cost) {
        dispatch(alterSwagger(-upgrade.cost))
        dispatch(buyUpgrade(upgrade))
      }
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradeContainer)
