import React from 'react'

//
const Achievement = ({achievement}) => (
  <div className="media col-md-4" style={{'opacity': achievement.addedAt ? 1.0 : 0.2}}>
    <div className="media-left">
      <i className={achievement.icon}></i>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{achievement.addedAt ? achievement.name: '???'}</h4>
      <div style={{display: achievement.addedAt ? 'block' : 'none'}}>
        <i className="fa fa-trophy"></i> Reached at {achievement.addedAt}
      </div>
      <div className="text-muted">{achievement.addedAt ? achievement.description: '???'}</div>
    </div>
  </div>
)

export default Achievement
