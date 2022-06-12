import React, { useEffect, useRef } from 'react';

export default function Notif({ msg }) {

  const msgDivRef = useRef();
  const skipRenders = useRef(1)

  useEffect(() => {
    if (skipRenders.current === 0) {
      msgDivRef.current.classList.add('notifAnim')  
      setTimeout(() => {
        msgDivRef.current.classList.remove("notifAnim");
        msg.displayMsg = false;
      }, 2000)

    } else {
      skipRenders.current--
    }

  }, [msg])

  return (
    <div className="notification" ref={msgDivRef}>{msg.text}</div>
  )
}
