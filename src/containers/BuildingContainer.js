import React, { Component } from 'react';
import { connect } from 'react-redux';
import Building from '../components/Building';
import { buyBuilding } from '../actions';
import _ from 'lodash';


class BuildingContainer extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3>HR Department</h3>
        {this.props.buildings.map((building) => {
          return <Building
            key={building.id}
            building={building}
            onBuildingClick={() => this.props.buyBuildingClick(building)}
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
    buildings: _.values(buildings).filter(b => b.visibleAfter < state.maxMoney),
    money: state.money
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBuildingClick: (building) => dispatch(buyBuilding(building))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingContainer)
