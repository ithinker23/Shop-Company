import React, { useRef } from 'react'
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems({ items, handleSettingCart }) {

    const notifsRef = useRef();
    const allItemsRef = useRef();

    return (
        <>
            <div ref = {allItemsRef} className='allItems'>
                {items.map(item => {
                    return <>
                        <Item handleSettingCart={handleSettingCart} item={item} />
                    </>
                })
                }
            </div>
            <Notifs ref={notifsRef} />
        </>
    )
}
