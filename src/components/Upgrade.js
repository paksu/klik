import React from 'react'

const iconStyles = {
  fontSize: '2em'
}
const Upgrade = ({upgrade, onUpgradeClick, canAfford}) => (
  <div style={{opacity: canAfford ? 1.0 : 0.5, cursor: 'pointer'}} onClick={onUpgradeClick} data-tip={upgrade.flavour}>
    <i style={iconStyles} className={upgrade.icon}></i>
    <div style={{display: 'inline-block', marginLeft: '5px'}}>
      <div className="text-info">
        <i className="fa fa-bolt" />
        {" "} {upgrade.cost}
      </div>
      {upgrade.name}
      <div style={{fontWeight: 500}}>{upgrade.effect}</div>
    </div>
  </div>
)

export default Upgrade
