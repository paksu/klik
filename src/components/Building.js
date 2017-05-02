import React from 'react'
import './Building.css';
import Money from './Money';

const Building = ({building, onBuildingClick, canAfford}) => (
  <div className="media building" onClick={onBuildingClick} style={{'opacity': canAfford ? 1.0 : 0.5}} data-tip={building.description}>
    <div className="media-left">
      <i className={building.icon}></i>
    </div>
    <div className="media-body">
      <h4 className="media-heading">
        {building.name}
        {" "}
        <span className="text-danger">$<Money amount={building.cost}/></span>
      </h4>
      <h5 className="media-heading">
        <span style={{display: "inline-block"}} className="text-muted">{building.count}</span>
        {" | "}
        <span className="text-success">+$<Money amount={building.count*building.income*building.incomeFactor} /></span>
      </h5>
    </div>
  </div>
)

export default Building
