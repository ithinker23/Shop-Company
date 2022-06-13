import React, { useEffect } from 'react'

export default function Notif({ notif }, { key }) {

    useEffect(() => {
        setTimeout(() => {
            console.log('unmounted')
            notif.remove = true;
        }, 2000)
    })


    return (
        <div id={key} className="notifMoveAnim">
            <div className="notification">
                <div className='notificationTitle'>{notif.title}: </div>
                <div className='notificationDesc'>{notif.text} </div>
                </div>
        </div>
    )
}
