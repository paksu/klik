import React from 'react'

const iconStyles = {
  fontSize: '2em'
}
const Upgrade = ({upgrade, onUpgradeClick, canAfford}) => (
  <div style={{opacity: canAfford ? 1.0 : 0.5, cursor: 'pointer'}} onClick={onUpgradeClick} >
    <i style={iconStyles} className={upgrade.icon}></i>
    <div style={{display: 'inline-block', marginLeft: '5px'}}>
      {upgrade.name} <span className="label label-danger">{upgrade.cost} $</span>
      <div style={{fontWeight: 500}}>{upgrade.effect}</div>
      <p className="text-muted" style={{fontStyle: 'italic'}}>{upgrade.flavour}</p>
    </div>
  </div>
)

export default Upgrade
