import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios';
import Item from './Item';
import Notifs from './Notifs';

export default function AllItems() {

    const [items, setItems] = useState([]);
    const backendURL = 'http://localhost:5000'

    const notifsRef = useRef();

    const [filters, setFilters] = useState([{name:"Price", value:[]},{name:"Class", value:["Shirts","Pants"]},{name:"Colours", values:["Brown","Black"]}]);

    async function getItems() {
        var Items = await Axios.get(backendURL + "/inventory/getItems", filters);
        setItems(Items.data.items)
    }

    useEffect(() => {
        getItems();
    }, [filters])

    return (
        <div className='allItems'>
            {items.map(item => {
                return <>
                    <Item item={item} />
                    <Notifs ref={notifsRef} />
                </>
            })
            }
        </div>
    )
}
