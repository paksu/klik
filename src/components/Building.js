import React from 'react'
import './Building.css';
import Money from './Money';

const Building = ({building, onBuildingClick, canAfford}) => (
  <div className="media building" onClick={onBuildingClick} style={{'opacity': canAfford ? 1.0 : 0.5}} data-tip={building.description}>
    <div className="media-left">
      <i className={building.icon}></i>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{building.name} <span className="text-success">+<Money amount={building.count*building.income*building.incomeFactor} />$</span></h4>
      <span style={{display: "inline-block"}} className="label label-success">+{building.income * building.incomeFactor} $</span>
      <span style={{display: "inline-block"}} className="label label-default">x {building.count}</span>
      <span style={{display: "inline-block"}} className="label label-danger">Cost <Money amount={building.cost}/></span>
      <span style={{display: "inline-block"}} className="label label-primary">LVL { building.incomeFactor}</span>
    </div>
  </div>
)

export default Building
