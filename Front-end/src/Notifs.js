import React from 'react';

export default function Notifs({ notifs}) {
  
  return (
    <div className='notifContainer'>
    {  
    notifs.map(notif => {
      return (
      <div className="notifMoveAnim">
      <div className="notification">{notif.text}</div>
      </div>
      )
    })}
    </div>
  )
}
