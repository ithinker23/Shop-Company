import React, { useEffect } from 'react'

export default function Notif({ notif }, { key }) {

    useEffect(() => {
        setTimeout(() => {
            console.log('unmounted')
            notif.remove = true;
        }, 2500)
    })

    return (
        <div id={key} className="notifMoveAnim">
            <div className="notification"  style={{backgroundColor:notif.color}}>
                <div className='notificationTitle'>{notif.title}: </div>
                <div className='notificationDesc'>{notif.text} </div>
                </div>
        </div>
    )
}
