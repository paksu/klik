import React from 'react'
import './Building.css';

const Building = ({building, onBuildingClick, canAfford}) => (
  <div className="media building" onClick={onBuildingClick} style={{'opacity': canAfford ? 1.0 : 0.5}}>
    <div className="media-left">
      <i className={building.icon}></i>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{building.name} <span className="text-success">+{ building.count * building.income * building.incomeFactor}$</span></h4>
      <div className="text-muted">{building.description}</div>
      <span style={{display: "inline-block"}} className="label label-success">+{building.income * building.incomeFactor} $</span>
      <span style={{display: "inline-block"}} className="label label-default">x {building.count}</span>
      <span style={{display: "inline-block"}} className="label label-danger">Cost { building.cost}</span>
      <span style={{display: "inline-block"}} className="label label-primary">LVL { building.incomeFactor}</span>
      {building.cost10}
    </div>
  </div>
)

export default Building
