import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetail = () => {

    const params = useParams()

    useEffect(() => {
        fetchItem()
        console.log(params)
    }, [])

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${params.id}`)
        const item = await fetchItem.json()
        setItem(item.data)
        console.log(item)
    }

    return (
        <div>
            <h1>{item.name}</h1>
            {/* <img src={item.featured} /> */}
            <h3>Description</h3>
            <h4>{item.description}</h4>
            {/* <img src={item.images.smallIcon} /> */}
        </div>

    )
}

export default ItemDetail