import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyBuilding, alterMoney } from '../actions';
import { BUILDINGS } from '../core/buildings';
import Building from '../components/Building';
import _ from 'lodash';


class BuildingContainer extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h3>
          HR Department
          {" "}
          <i className="fa fa-question-circle-o" data-tip="Spend cash to hire staff so you can make money" />
        </h3>

        {this.props.buildings.map((building) => {
          return <Building
            key={building.id}
            building={building}
            onBuildingClick={() => this.props.buyBuildingClick(building, this.props.money)}
            canAfford={this.props.money >= building.cost}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const buildings = state.buildings;
  return {
    buildings: BUILDINGS.filter(b => b.visibleAfter < state.maxMoney).map(b => Object.assign({}, b, buildings[b.id])),
    money: state.money
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBuildingClick: (building, money) => {
      if(money >= building.cost) {
        dispatch(alterMoney(-building.cost));
        dispatch(buyBuilding(building));
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingContainer)
