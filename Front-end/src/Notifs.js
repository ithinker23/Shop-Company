import React, { forwardRef, useState, useImperativeHandle } from 'react';
import Notif from './Notif'
import { v4 as uuidv4 } from 'uuid';



export default forwardRef(function Notifs(props, ref) {

  const [notifs, setNotifs] = useState([]);

  useImperativeHandle(ref, () => ({

    showNotifs(title, msg) {

        setNotifs(prevNotifs => {
          var result = prevNotifs.filter(notif => notif.remove === false)
          return [{ id: uuidv4(), title: title, text: msg, remove: false },...result];

        })
      },

  }))


  return (
    <div className='notifContainer'>
      <div className='gradient'></div>
      {
        notifs.map(notif => {
          return (
            <Notif key={notif.id} notif={notif} />
          )
        })
      }
    </div>
  )
})
