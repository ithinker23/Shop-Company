import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios';
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems() {

    const notifsRef = useRef();

    const [items, setItems] = useState([]);
    const backendURL = 'http://localhost:5000';


    async function getItems() {
        var Items = await Axios.get(backendURL + "/inventory/getItems");
        setItems(Items.data.items)
    }

    useEffect(() => {
        getItems();
    })

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
