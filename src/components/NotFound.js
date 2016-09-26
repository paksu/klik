import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <span className="neg">ERROR 404</span>
    <p>
    The page is missing or never was written. You can wait and<br />
    see if it becomes available again, or you can restart your computer.
    </p>
    <p>
    * Press CTRL+ALT+DEL to restart your computer. You will<br />
     &nbsp; lose unsaved information in any programs that are running.<br />
    * <a href="/">Or maybe click here</a>
    </p>
  </div>
)

export default NotFound
