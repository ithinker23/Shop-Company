import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios';
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems({items}) {

    const notifsRef = useRef();

    return (
        <>
        <div className='allItems'>
            {items.map(item => {
                return <>
                    <Item item={item} />
                    <Notifs ref={notifsRef} />
                </>
            })
            }
        </div>
        </>
    )
}
