import React from 'react';

const Notification = ({notification}) => (
  <div className="animated lightSpeedIn alert alert-success" role="alert">
    <h4>Achievement unlocked!</h4>
    <b>{notification.name}</b>
    <div>{notification.description}</div>
  </div>
)

export default Notification
